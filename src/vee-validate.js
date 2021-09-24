import {
    required,
    confirmed,
    length,
    email,
    alpha,
    numeric,
    max,
    min,
    image
} from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", {
    ...required,
    message: "This field is required"
});

extend("email", {
    ...email,
    message: "This field must be a valid email"
});

extend("confirmed", {
    ...confirmed,
    message: "This field confirmation does not match"
});

extend("alpha", {
    ...alpha,
    message: "This field must be a only letters"
});

extend("numeric",{
    ...numeric,
    message: "This field must be a valid birth day"
})

extend("length", {
    ...length,
    message: "This field must have 2 options"
});

extend("max", {
    ...max,
    message: "This field max length 15 symbols"
});

extend("min", {
    ...min,
    message: "Too short field"
})

extend("image", {
    ...image,
    message: "File must be a image"
})