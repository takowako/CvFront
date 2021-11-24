<template>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(SaveEdu)" class="row">
        
        <!-- Edueriance Title -->
        <b-col cols="12" sm="6">
            <validation-provider
            name="Edueriance Title"
            :rules="{ required: true}"
            v-slot="validationContext"
            >
            <b-form-group id="edu-title" label="Education title" label-for="edu-title-input">
                <b-form-input
                id="edu-title-input"
                name="edu-title-input"
                v-model="EduForm.EduTitleI"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
            </validation-provider>
        </b-col>
        <!-- End Education title -->

        <!-- Education Job  -->
        <b-col cols="12" sm="6">
            <validation-provider
            name="Education Job"
            :rules="{ required: true, min: 3 }"
            v-slot="validationContext">
            <b-form-group id="edu-job" label="Education Job" label-for="edu-job-input" >
                <b-form-input
                id="edu-job-input"
                name='edu-job-input'
                v-model="EduForm.EduJobI"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                >
                </b-form-input>
            </b-form-group>
            </validation-provider>
        </b-col>
        <!-- End Education Job -->


        <!-- Education Date Start -->
        <b-col cols="12" sm="6" >
            <validation-provider
            name="Education Date Start"
            :rules="{ required: true, min: 3 }"
            v-slot="validationContext">
            <b-form-group id="edu-date-start" label="Education Date Start" label-for="edu-date-start-input" >
                <b-form-input
                id="edu-date-start-input"
                name='edu-date-start-input'
                type='date'
                v-model="EduForm.EduDateStartI"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                >
                </b-form-input>
            </b-form-group>
            </validation-provider>
        </b-col>
        <!-- Education Date End End  -->

        <!-- Education Date End -->
        <b-col cols="12" sm="6" >
            <validation-provider
            name="Education Date end"
            :rules="{ required: true, min: 3 }"
            v-slot="validationContext">
            <b-form-group id="edu-date-end" label="Education Date end" label-for="edu-date-end-input" >
                <b-form-input
                id="edu-date-end-input"
                name='edu-date-end-input'
                type='date'
                v-model="EduForm.EduDateEndI"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                >
                </b-form-input>
            </b-form-group>
            </validation-provider>
        </b-col>
        <!-- Education Date End End -->

        <!-- Education Description  -->
        <b-col cols="12" sm="12" >
            <validation-provider
            name="Education Description"
            :rules="{ required: true, min: 3 }"
            v-slot="validationContext">
            <b-form-group id="edu-desc" label="Education Description" label-for="edu-desc" >
                <b-textarea
                id="edu-desc"
                name='edu-desc'
                type='date'
                v-model="EduForm.EduDescI"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                rows="6"
                >
                </b-textarea>
            </b-form-group>
            </validation-provider>
        </b-col>
        <!-- Education Descriptipn End -->


    </b-form>
  </validation-observer>
</template>

<script>
export default {

    data(){

        return{
            EduForm:{
                EduTitleI:"",
                EduJobI:"",
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