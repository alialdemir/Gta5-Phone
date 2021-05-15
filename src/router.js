
import HomePage from './pages/index';
import Calculator from './components/apps/calculator/Calculator';
import PhoneTab from './components/apps/phone/PhoneTab';
import ContactDetail from './components/apps/phone/contact/ContactDetail';
import Calling from './components/apps/phone/keypad/Calling';
import Photos from './components/apps/photos/Photos';
import Messages from './components/apps/messages/Messages';
import MessageDetail from './components/apps/messages/MessageDetail';
import WhatsappContainer from './components/apps/whatsapp/WhatsappContainer';
import WhatsappDetail from './components/apps/whatsapp/WhatsappDetail';
import Settings from './components/apps/settings/Settings';

const routes = [
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
        options: {
            transition: 'f7-cover-v',
        },
    },
    {
        path: '/Photos',
        component: Photos,
    },
    {
        name: 'Calling',
        path: '/Calling/:phoneNumber',
        component: Calling,
    },
    {
        path: '/Messages',
        component: Messages,
    },
    {
        name: 'MessageDetail',
        path: '/MessageDetail/:phoneNumber',
        component: MessageDetail,
    },
    {
        name: 'Whatsapp',
        path: '/Whatsapp',
        component: WhatsappContainer,
    },
    {
        name: 'WhatsappDetail',
        path: '/WhatsappDetail/:phoneNumber',
        component: WhatsappDetail,
    },
    {
        name: 'Settings',
        path: '/Settings',
        component: Settings,
    },
];

export default routes;