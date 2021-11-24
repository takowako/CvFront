<template>
    <b-container fluid="md" class='hfull'>
        <div class="p-4">

            <!-- Profile Card Start -->
            <b-card class="my-3">
             <h4 class="text-start card-title mb-4 p-1 font-weight-bold">Profile</h4>

             <b-form class="row" >
                <b-col cols="12" sm="6">
                    <b-form-group
                        id="input-group-1"
                        label="Email address:"
                        label-for="input-1"
                        description="We'll never share your email with anyone else."
                    >
                        <b-form-input
                        id="input-1"
                        size="large"
                        type="email"
                        placeholder="Enter email"
                        required
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col cols="12" sm="6">
                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        size="large"
                        placeholder="Enter name"
                        required
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col cols="12" sm="6">
                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                    
                        placeholder="Enter name"
                        required
                        ></b-form-input>
                    </b-form-group>
                </b-col>
             </b-form>
            </b-card>

            <!-- Social media Card Start -->
            <b-card class="my-3 p-2">
                <b-row classs="justify-content-between align-items-start">
                    <h4 class="text-start card-title mb-4 p-1 font-weight-bold">Social Media</h4>
                </b-row>
                  <b-form >

                    <b-row>
                        <!-- mail input -->
                        <b-col cols="12" sm="6" class="my-2">
                            <b-input-group>
                                <b-input-group-prepend is-text>
                                    <b-icon icon="mailbox2"></b-icon>
                                </b-input-group-prepend>
                                <b-form-input
                                id="input-mail"
                                size="large"
                                placeholder="Enter email"
                                ></b-form-input>
                            </b-input-group>                 
                        </b-col>

                        <!-- LinkedIn input -->
                        <b-col cols="12" sm="6" class="my-2">
                            <b-input-group>
                                <b-input-group-prepend is-text>
                                    <b-icon icon="linkedin"></b-icon>
                                </b-input-group-prepend>
                                <b-form-input
                                id="input-linkedin"
                                size="large"
                                placeholder="Enter linkedin"
                                required
                                ></b-form-input>
                            </b-input-group>
                        </b-col>
                        
                    </b-row>

                    <b-row >

                        <!-- facebook input -->
                        <b-col cols="12" sm="6" class="my-2">
                            <b-input-group>
                                <b-input-group-prepend is-text>
                                    <b-icon icon="facebook"></b-icon>
                                </b-input-group-prepend>
                                <b-form-input
                                id="input-facebook"
                                size="large"
                                placeholder="Enter Facebook"
                                required
                                ></b-form-input>
                            </b-input-group>
                        </b-col>

                        <!-- Twitter input -->
                        <b-col cols="12" sm="6" class="my-2">
                            <b-input-group>
                                <b-input-group-prepend is-text>
                                    <b-icon icon="twitter"></b-icon>
                                </b-input-group-prepend>
                                <b-form-input
                                id="input-twitter"
                                size="large"
                                placeholder="Enter Twitter"
                                required
                                ></b-form-input>
                            </b-input-group>
                        </b-col>

                    </b-row>

                    <b-row >

                        <!-- Google input -->
                        <b-col cols="12" sm="6" class="my-2">
                            <b-input-group>
                                <b-input-group-prepend is-text>
                                    <b-icon icon="google"></b-icon>
                                </b-input-group-prepend>
                                <b-form-input
                                id="input-google"
                                size="large"
                                placeholder="Enter Google"
                                required
                                ></b-form-input>
                            </b-input-group>
                        </b-col>


                    </b-row>

                    

                  </b-form>
             
            </b-card>


            <!-- Experiance Card Start -->
            <b-card class="my-3 p-2">
                <b-row class="justify-content-between align-items-start">
                  <h4 class="text-start card-title mb-4 p-1 font-weight-bold">Experiance</h4>
                  <b-button variant="link" class="font-weight-bold h5 text-dark" v-b-toggle.collapse-exp> + Add Experiance</b-button>
                </b-row>
                <b-row>
                 <b-collapse id="collapse-exp" class="mt-2" style="flex:1">
                    <experiance></experiance>
                 </b-collapse>
                </b-row>
            </b-card>


            <!-- Education Card Start -->
            <b-card class="my-3 p-2">
             <b-row class="justify-content-between align-items-start">
                <h4 class="text-start card-title mb-4 p-1 font-weight-bold">Education</h4>
                <b-button variant="link" class="font-weight-bold h5 text-dark" v-b-toggle.collapse-edu > + Add Education</b-button>
             </b-row>
             <b-row>
                 <b-collapse id="collapse-edu" class="mt-2" style="flex:1">
                  <education></education>
                 </b-collapse>
             </b-row>
            </b-card>

            <!-- Reffrence Card Start  -->
            <b-card class="my-3 p-2">
             <b-row class="justify-content-between align-items-start">
                <h4 class="text-start card-title mb-4 p-1 font-weight-bold">Reffrence</h4>
                <b-button variant="link" class="font-weight-bold h5 text-dark" v-b-toggle.collapse-reff > + Add Reffrence</b-button>
             </b-row>
             <b-row>
                 <b-collapse id="collapse-reff" class="mt-2" style="flex:1">
                  <reffrence></reffrence>
                 </b-collapse>
             </b-row>
            </b-card>


            <!-- Projects Card Start -->
            <b-card class="my-3 p-2">
             <b-row class="justify-content-between align-items-start">
                <h4 class="text-start card-title mb-4 p-1 font-weight-bold">Project</h4>
                <b-button variant="link" class="font-weight-bold h5 text-dark" v-b-toggle.collapse-proj > + Add Project</b-button>
             </b-row>
             <b-row>
                 <b-collapse id="collapse-proj" class="mt-2" style="flex:1">
                     <project></project>
                 </b-collapse>
             </b-row>
            </b-card>




        </div>

    </b-container>
  
</template>

<script>

import experiance from '../components/items/experiance.vue';
import education from '../components/items/education.vue';
import reffrence from '../components/items/reffrence.vue';
import project from '../components/items/project.vue';

export default {

    components:{
        experiance,
        education,
        reffrence,
        project
    },
    methods:{
        SaveExp(){
            console.log('Saved')
        },
        getValidationState({ dirty, validated, valid = null }) {
         return dirty || validated ? valid : null;
        },
    }

}
</script>

<style scoped>

.card-title{
    border-bottom: 2px;
    border-bottom-color:red ;
    border-bottom-style: solid;
    width: max-content;
}

</style>