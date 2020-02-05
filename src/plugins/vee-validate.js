  
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import { Validator } from 'vee-validate';

const dict = {
    attributes: {
        number: 'Email Address'
    },
    custom: {
      phone: {
        required: () => 'The phone field must be numeric'
      }
    }
  };
  
Validator.localize('en', dict);

Vue.use(VeeValidate, {
    classes: true,
    classNames: {
        valid: 'is-valid',
        invalid: 'is-invalid'
    },
    validity: true
});