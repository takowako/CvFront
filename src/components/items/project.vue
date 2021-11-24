<template>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(SaveExp)" class="row">
        
        <!-- Project name -->
        <b-col cols="12" sm="6">
            <validation-provider
            name="Project name "
            :rules="{ required: true}"
            v-slot="validationContext"
            >
            <b-form-group id="proj-name" label="Project name" label-for="proj-name-input">
                <b-form-input
                id="proj-name-input"
                name="proj-name-input"
                v-model="ProjForm.ProjNameI"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
            </validation-provider>
        </b-col>
        <!-- Project name -->

        <!-- Project Date  -->
        <b-col cols="12" sm="6">
            <validation-provider
            name="Proj Date"
            :rules="{ required: true, min: 3 }"
            v-slot="validationContext">
            <b-form-group id="proj-date" label="Project Date" label-for="proj-date-input" >
                <b-form-input
                id="proj-date-input"
                name='proj-date-input'
                type='date'
                v-model="ProjForm.ProjDateI"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                >
                </b-form-input>
            </b-form-group>
            </validation-provider>
        </b-col>
        <!-- End Project Date -->


        <!-- Start project Desc -->
        <b-col cols="12" sm="12">
            <validation-provider
            name="Project Description"
            :rules="{ required: true, min: 3 }"
            v-slot="validationContext">
            <b-form-group id="proj-desc" label="Project Description" label-for="proj-desc-input" >
                <b-textarea
                id="proj-desc"
                name='proj-desc'
                v-model="ProjForm.ProjDescI"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                rows="6"
                >
                </b-textarea>
            </b-form-group>
            </validation-provider>
        </b-col>
        <!-- End Project Desc -->

    </b-form>
  </validation-observer>
</template>

<script>
export default {

    data(){

        return{
            ProjForm:{
                ProjNameI:"",
                ProjDateI:"",
                ProjDescI:"",

            }
        }
    },
    methods:{
        getValidationState({ dirty, validated, valid = null }) {
        return dirty || validated ? valid : null;
        },
    }


}
</script>

<style>

</style>