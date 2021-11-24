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


        <!-- Experiance Date Start -->
        <b-col cols="12" sm="6" >
            <validation-provider
            name="Experiance Date Start"
            :rules="{ required: true, min: 3 }"
            v-slot="validationContext">
            <b-form-group id="exp-date-start" label="Experiance Date Start" label-for="exp-date-start-input" >
                <b-form-input
                id="exp-date-start-input"
                name='exp-date-start-input'
                type='date'
                v-model="ExpForm.ExpDateStartI"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                >
                </b-form-input>
            </b-form-group>
            </validation-provider>
        </b-col>
        <!-- Experiance Date End End  -->

        <!-- Experiance Date End -->
        <b-col cols="12" sm="6" >
            <validation-provider
            name="Experiance Date end"
            :rules="{ required: true, min: 3 }"
            v-slot="validationContext">
            <b-form-group id="exp-date-end" label="Experiance Date end" label-for="exp-date-end-input" >
                <b-form-input
                id="exp-date-end-input"
                name='exp-date-end-input'
                type='date'
                v-model="ExpForm.ExpDateEndI"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                >
                </b-form-input>
            </b-form-group>
            </validation-provider>
        </b-col>
        <!-- Experiance Date End End -->

        <!-- Experiance Description  -->
        <b-col cols="12" sm="12" >
            <validation-provider
            name="Experiance Description"
            :rules="{ required: true, min: 3 }"
            v-slot="validationContext">
            <b-form-group id="exp-desc" label="Experiance Description" label-for="exp-desc" >
                <b-textarea
                id="exp-desc"
                name='exp-desc'
                v-model="ExpForm.ExpDescI"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                rows="6"
                >
                </b-textarea>
            </b-form-group>
            </validation-provider>
        </b-col>
        <!-- Experiance Descriptipn End -->


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