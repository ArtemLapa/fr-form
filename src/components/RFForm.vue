<template>
  <div class="rf-form">
    <h1 class="rf-form__title">To participate in the conference, please fill out the form</h1>
    <router-link to="/fire-store" v-if="currentStep === 3">All members ({{ members }})</router-link>

    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <b-form @submit="onSubmit">

        <fieldset>
          <keep-alive>
            <ValidationProvider v-if="currentStep === 1" rules="alpha|required|max:15" v-slot="{ valid, errors }">
              <b-form-group id="input-group-1" label="First Name:" label-for="input-1" class="mb-4">
                <b-form-input
                    id="input-1"
                    v-model="form.firstName"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="Enter first name"
                    min=4
                    max=30
                    required
                    class="rf-form__input"
                />
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </keep-alive>

          <keep-alive>
            <ValidationProvider v-if="currentStep === 1" rules="alpha|required|max:15" v-slot="{ valid, errors }">
              <b-form-group id="input-group-2" label="Your Last Name:" label-for="input-2" class="mb-4">
                <b-form-input
                    id="input-2"
                    v-model="form.lastName"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="Enter last name"
                    required
                    class="rf-form__input"
                />
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </keep-alive>

          <keep-alive>
            <ValidationProvider v-if="currentStep === 1" rules="required" v-slot="{ valid, errors }">
              <b-form-group label="Choose your birth day" label-for="b-day-date" class="mb-4">
                <b-form-input
                    type="date"
                    id="b-day-date"
                    :state="errors[0] ? false : (valid ? true : null)"
                    v-model="form.birthDay"
                    class="rf-form__input"
                />
              </b-form-group>
            </ValidationProvider>
          </keep-alive>

          <keep-alive>
            <ValidationProvider v-if="currentStep === 1" rules="required|min:10|max:180" v-slot="{ valid, errors }">
              <b-form-group id="input-group-3" label="Report a Subject:" label-for="input-3" class="mb-4">
                <b-form-input
                    id="input-3"
                    type="text"
                    v-model="form.subject"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="Enter your subject"
                    required
                    class="rf-form__input"
                />
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>

              </b-form-group>
            </ValidationProvider>
          </keep-alive>

          <keep-alive>
            <ValidationProvider v-if="currentStep === 1" rules="required" v-slot="{ valid, errors }">
              <b-form-group id="countries-group" label="Please select your country" class="mb-4">
                <b-form-select v-model="form.country" class="rf-form__select">
                  <b-form-select-option-group label="Please select your country">
                    <b-form-select-option :value="null">-- countries -- </b-form-select-option>
                     <b-form-select-option
                        v-for="(country, index) in countries"
                        :key="index"
                        :value="country.label"
                        :state="errors[0] ? false : (valid ? true : null)"
                    >
                      {{ country.label }}
                    </b-form-select-option>
                  </b-form-select-option-group>
                </b-form-select>
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </keep-alive>

          <keep-alive>
            <Validation-provider v-if="currentStep === 1">
              <b-form-group
                  id="input-group-4"
                  label="Phone number:"
                  description="Enter your phone number"
                  class="mb-4"
              >
                <VuePhoneNumberInput
                    v-model="form.phone"
                    :show-code-on-list="true"
                    :no-example="false"
                    :required="true"
                    :clearable="true"
                />
              </b-form-group>
            </Validation-provider>
          </keep-alive>

          <keep-alive>
            <ValidationProvider v-if="currentStep === 1" rules="required|email" name="Email" v-slot="{ valid, errors }">
              <b-form-group
                  id="input-group-5"
                  label="Email address:"
                  label-for="input-5"
                  description="We'll never share your email with anyone else."
                  class="mb-4"
              >
                <b-form-input
                    id="input-5"
                    type="email"
                    v-model="form.email"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="Enter email"
                    required
                    class="rf-form__input"
                />
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </keep-alive>

          <keep-alive>
            <ValidationProvider v-if="currentStep === 2" rules="required|max:30" v-slot="{ valid, errors }">
              <b-form-group id="input-group-6" label="Your Company:" label-for="input-6" class="mb-4">
                <b-form-input
                    id="input-6"
                    v-model="form.company"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="Enter your company"
                    min=4
                    max=30
                    required
                    class="rf-form__input"
                />
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </keep-alive>

          <keep-alive>
            <ValidationProvider v-if="currentStep === 2" rules="required|max:30" v-slot="{ valid, errors }">
              <b-form-group id="input-group-7" label="Your Position:" label-for="input-7" class="mb-4">
                <b-form-input
                    id="input-7"
                    v-model="form.position"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="Enter your position"
                    min=4
                    max=30
                    required
                    class="rf-form__input"
                />
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </keep-alive>

          <keep-alive>
            <ValidationProvider v-if="currentStep === 2" rules="required|max:180" v-slot="{ valid, errors }">
              <b-form-group id="input-group-8" label="Tell us about self:" label-for="textarea" class="mb-4">
                <b-form-textarea
                  id="textarea"
                  v-model="form.about"
                  :state="errors[0] ? false : (valid ? true : null)"
                />
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </keep-alive>

<!--          <keep-alive>
            <ValidationProvider v-if="currentStep === 2" rules="required|image" v-slot="{ valid, errors, validate }">
             <b-form-group id="input-file" label="Upload your photo" label-for="image-upload">
               <b-form-file
                   accept=".jpg, .png, .gif"
                   type="file"
                   v-model="form.photo"
                   @change="validate"
                   :state="errors[0] ? false : (valid ? true : null)"
               />
               <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
             </b-form-group>
            </ValidationProvider>
          </keep-alive>-->



        </fieldset>

        <div class="rf-form__steps" v-if="currentStep < 3">
          <span class="rf-form__step-counter">Step {{ currentStep }}</span>

          <template v-if="currentStep === 1">
            <b-button
                @click="onSubmit"
                type="button"
                variant="primary"
                :disabled="disabled ? invalid : false"
            >
              Next Step
            </b-button>
          </template>

          <template v-if="currentStep === 2">
            <b-button
                @click="onUpdateSubmit"
                type="button"
                variant="primary"
                :disabled="disabled ? invalid : false"
            >
              Next
            </b-button>
          </template>
        </div>

      </b-form>
    </ValidationObserver>

    <keep-alive>
      <div v-if="currentStep === 3" class="rf-form__social-links">
        <ul class="rf-form__links-list">
          <li class="rf-form__links-item">
            <a href="#">
              <b-icon-facebook class="rf-form__links-icons"/>
            </a>
          </li>
          <li class="rf-form__links-item">
            <a href="#">
              <b-icon-twitter class="rf-form__links-icons"/>
            </a>
          </li>
          <li class="rf-form__links-item">
            <a href="#">
              <b-icon-google class="rf-form__links-icons"/>
            </a>
          </li>
        </ul>
      </div>
    </keep-alive>

  </div>
</template>

<script>
import VuePhoneNumberInput from "vue-phone-number-input";
import {ValidationObserver, ValidationProvider} from "vee-validate";
import {db} from "../firebase";

const countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

export default {
  name: "RFForm",
  components: {
    VuePhoneNumberInput,
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    /*countAllMembers {
      type: Number,
    }*/
  },
  data: () => ({
    form: {
      firstName: "",
      lastName: "",
      birthDay: "",
      subject: "",
      country: "",
      phone: "",
      email: "",
      company: "",
      position: "",
      about: "",
      // photo: ""
    },
    subForm: null,
    currentStep: 1,
    disabled: true,
  }),
  created() {
    let localId = localStorage.getItem("userIdFirebase");
    if (localId) {
      this.currentStep = 2;
    } else {
      this.currentStep = 1;
    }
  },
  methods: {
    onSubmit() {
      db.collection("users").add({
        name: this.form.firstName,
        lastName: this.form.lastName,
        country: this.form.country,
        subject: this.form.subject,
        phone: this.form.phone,
        birthday: this.form.birthDay,
        email: this.form.email,
      })
      .then(function(docRef) {
        localStorage.setItem("userIdFirebase", docRef.id);
      })
      this.currentStep++
    },
    onUpdateSubmit() {
      db.collection("users").doc(localStorage.getItem("userIdFirebase")).update({
        company: this.form.company,
        position: this.form.position,
        about: this.form.about,
        // photo: this.form.photo,
      })
      localStorage.removeItem("userIdFirebase")
      this.currentStep++
      // console.log("onUpdateSubmit")
    }
  },
  computed: {
    countries () {
      const list = countries.getNames("en", { select: "official" });
      return Object.keys(list).map((key) => ({ value: key, label: list[key] }));
    },
  },
}
</script>

<style lang="scss">
$style: "rf-form";
.#{$style} {
  margin-bottom: 120px;
  &__title {
    margin-bottom: 60px;
  }
  &__input {
    background-color: transparent!important;
  }
  &__steps {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }
  &__step-counter {
    margin-right: 15px;
  }
  &__links-list {
    margin: 0 auto;
    padding: 0;
    display: flex;
    max-width: 400px;
    align-items: center;
    justify-content: center;
  }
  &__links-item {
    flex-basis: 33%;
    align-self: center;
    &:last-child {
      margin-right: 0;
    }
  }
  &__links-icons {
    font-size: 42px;
    vertical-align: auto;
  }
}
.custom-select {
  width: 100%;
  padding: 0.375rem 0.75rem;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
</style>