<template>
  <validation-observer ref="observer" v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(SaveExp)" class="row">
        
        <!-- Experiance Title -->
        <b-col cols="12" sm="6">
            <validation-provider
            name="Experiance Title"
            :rules="{ required: true}"
            v-slot="validationContext"
            >
            <b-form-group id="exp-title" label="Experiance title" label-for="exp-title-input">
                <b-form-input
                id="exp-title-input"
                name="exp-title-input"
                v-model="ExpForm.ExpTitleI"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
            </validation-provider>
        </b-col>
        <!-- End Experiance title -->

        <!-- Experiance Job  -->
        <b-col cols="12" sm="6">
            <validation-provider
            name="Experiance Job"
            :rules="{ required: true, min: 3 }"
            v-slot="validationContext">
            <b-form-group id="exp-job" label="Experiance Job" label-for="exp-job-input" >
                <b-form-input
                id="exp-job-input"
                name='exp-job-input'
                v-model="ExpForm.ExpJobI"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                >
                </b-form-input>
            </b-form-group>
            </validation-provider>
        </b-col>
        <!-- End Experiance Job -->
    </b-form>
  </validation-observer>
</template>

<script>
export default {
    data(){

        return{
            ExpForm:{
                ExpTitleI:"",
                ExpJobI:"",
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