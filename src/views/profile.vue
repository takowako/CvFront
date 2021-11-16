<template>
    <b-container>
        <div class="p-4">
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
            <b-card class="my-3">
             <div class="d-flex justify-content-between align-items-start">
                <h4 class="text-start card-title mb-4 p-1 font-weight-bold">Experiance</h4>
                <b-button variant="link" class="font-weight-bold h5 text-dark"> + Add Experiance</b-button>
             </div>
            </b-card>
            <b-card class="my-3">
             <div class="d-flex justify-content-between align-items-start">
                <h4 class="text-start card-title mb-4 p-1 font-weight-bold">Education</h4>
                <b-button variant="link" class="font-weight-bold h5 text-dark"> + Add Education</b-button>
             </div>
            </b-card>
        </div>

    </b-container>
  
</template>

<script>
export default {

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