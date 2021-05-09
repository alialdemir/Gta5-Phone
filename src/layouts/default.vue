<template>
  <f7-app v-bind="f7params" theme-dark>
    <mobile-phone>
      <f7-view main url="/"></f7-view>
    </mobile-phone>
  </f7-app>
</template> 


<script>
/* Import pages components */
import HomePage from '../pages/index';
import Calculator from '../components/apps/calculator/Calculator';
import PhoneTab from '../components/apps/phone/PhoneTab';
import ContactDetail from '../components/apps/phone/contact/ContactDetail';
import PhotoContainer from '../components/apps/photos/PhotoContainer';

/*
  Now we need to map components to routes.
  We need to pass them along with the F7 app parameters to <f7-app> component
  */

export default {
  data() {
    return {
      // app params
      f7params: {
        name: 'My App',
        id: 'com.myapp.test',
        // specify routes for app
        routes: [
          {
            path: '/',
            component: HomePage,
          },
          {
            path: '/Calculator',
            component: Calculator,
          },
          {
            path: '/Phone',
            component: PhoneTab,
          },
          {
            path: '/ContactDetail',
            component: ContactDetail,
          },
          {
            path: '/Photos',
            component: PhotoContainer,
          },
        ],
      },
    };
  },
};
</script>

<style>
@import 'tailwindcss/dist/utilities.min.css';
</style>
