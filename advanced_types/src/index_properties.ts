/**
 * Holds form errors
 *
 * When you don't know in advance poperty names
 * or how many entries that will be in an object
 * or interface for instance, you can use index properties.
 */
interface ErrorContainer {
  [prop: string]: string;
}

const errors: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital letter!',
};
