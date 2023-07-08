import type { Meta } from '@storybook/react';
import TemplatePreview from './TemplatePreview';
import { withFluentProvider } from '../../../../.storybook/decorators';

const Story: Meta<typeof TemplatePreview> = {
  component: TemplatePreview,
  title: 'TemplatePreview',
};
export default Story;

export const Primary = {
  args: {
    templateContent: '<div id="email"> <table width="100%" role="presentation"> <tbody><tr> <td style="color: white;" align="center" bgcolor="#00A4BD"> <img align="middle" width="400px" src="https://hs-8886753.f.hubspotemail.net/hs/hsstatic/TemplateAssets/static-1.60/img/hs_default_template_images/email_dnd_template_images/ThankYou-Flower.png" alt="Flower"> <h1> Welcome! </h1> </td> </tr></tbody></table> <table style="padding: 30px 30px 30px 60px;" cellspacing="10px" cellpadding="0" border="0" role="presentation"> <tbody><tr> <td> <h2> Lorem ipsum dolor sit amet</h2> <p> Ut eget semper libero. Vestibulum non maximus nisl, ut iaculis ante. Nunc arcu elit, cursus eget urna et, tempus aliquam eros. Ut eget semper libero. Vestibulum non maximus nisl, ut iaculis ante. Nunc arcu elit, cursus eget urna et, tempus aliquam eros. </p> <button> Button 1 </button> </td> </tr> </tbody></table> <table style="padding: 30px 30px 30px 60px;" width="100%" cellspacing="10px" cellpadding="0" border="0" role="presentation"> <tbody><tr> <td> <img align="middle" width="200px" src="https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_sample-illustration-3.svg" alt="Blog"> <h2> Vivamus ac elit eget </h2> <p> Vivamus ac elit eget dolor placerat tristique et vulputate nibh. Sed in elementum nisl, quis mollis enim. Etiam gravida dui vel est euismod, at aliquam ipsum euismod. </p> </td> <td> <img align="middle" width="200px" src="https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_sample-illustration-5.svg" alt="Shopping"> <h2> Suspendisse tincidunt iaculis </h2> <p> Suspendisse tincidunt iaculis fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras laoreet elit purus, quis pulvinar ipsum pulvinar et. </p> </td> </tr> <tr> <td> <button> Button 2 </button> </td> <td> <button> Button 3 </button> </td> </tr></tbody></table> <table style="margin-top: 50px;" width="100%" bgcolor="#EAF0F6" role="presentation"> <tbody><tr> <td style="padding: 30px 30px;" align="center"> <h2> Nullam porta arcu </h2> <p> Nam vel lobortis lorem. Nunc facilisis mauris at elit pulvinar, malesuada condimentum erat vestibulum. Pellentesque eros tellus, finibus eget erat at, tempus rutrum justo. </p> <a href="#"> Ask us a question</a> </td> </tr> </tbody></table> <table width="100%" bgcolor="#F5F8FA" role="presentation"> <tbody><tr> <td style="padding: 30px 30px;" align="left"> <p style="color:#99ACC2"> Made with ♥ at HubSpot HQ </p> <a href="#" class="subtle-link"> Unsubscribe </a> </td> </tr> </tbody></table> </div>',
    leftButtonProps: {
      disabled: false,
      onClick: () => console.log('Left Button Clicked'),
    },
    rightButtonProps: {
      disabled: false,
      onClick: () => console.log('Right Button Clicked'),
    },
  },
  decorators: [withFluentProvider],
};
