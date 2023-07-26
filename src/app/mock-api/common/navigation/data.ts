/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboards',
        title: 'Dashboards',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboards/project'
    },
    {
        id   : 'ecommerce',
        title: 'Inventory',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/ecommerce'
  
    },
    {
        id   : 'suppliers',
        title: 'Suppliers',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/suppliers'
  
    },
    {
        id   : 'emplpoyee',
        title: 'Employee',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/employees'
  
    },
    {
        id   : 'customers',
        title: 'Customers',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/customers'
  
    },
    {
        id      : 'personal',
        title   : 'PersonalApp',
        subtitle: 'Custom made application designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'personal.notes',
                title: 'Notes',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/personal/notes'
          
            },
            {
                id   : 'personal.scrumboard',
                title: 'Scrumboard',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/personal/scrumboard'
          
            },
            {
                id   : 'personal.tasks',
                title: 'Tasks',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/personal/tasks'
          
            },
            {
                id   : 'personal.contacts',
                title: 'Contacts',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/personal/contacts'
          
            },
            {
                id   : 'personal.chat',
                title: 'Chat',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/personal/chat'
          
            },
            {
                id   : 'personal.mailbox',
                title: 'Mailbox',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/personal/mailbox'
          
            },
            {
                id   : 'personal.file-manager',
                title: 'File-Manager',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/personal/file-manager'
          
            },
            {
                id   : 'personal.profile',
                title: 'Profile',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/personal/profile'
          
            },
            {
                id   : 'personal.settings',
                title: 'Settings',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/personal/settings'
          
            }
        
        ]
    }

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'tasks',
        title: 'Tasks',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/tasks'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'contacts',
        title: 'Contacts',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/contacts'
    },
    {
        id   : 'chat',
        title: 'Chat',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/chat'
    },
    {
        id   : 'mailbox',
        title: 'Mailbox',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/mailbox'
    },
    {
        id   : 'file-manager',
        title: 'File-Manager',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/file-manager'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
