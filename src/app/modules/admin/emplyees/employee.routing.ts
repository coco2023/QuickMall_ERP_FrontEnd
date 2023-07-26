import { Route } from '@angular/router';
import { SupplierListComponent } from '../suppliers/supplier/list/supplier.component';
import { InventoryBrandsResolver, InventoryCategoriesResolver, InventoryProductsResolver, InventoryTagsResolver, InventoryVendorsResolver } from 'app/modules/admin/ecommerce/product/product.resolvers';
import { EmployeeComponent } from './employee/employee.component';

export const employeeRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'employee'
    },
    {
        path     : 'employee',
        component: EmployeeComponent,
        children : [
            {
                path     : '',
                component: SupplierListComponent,
                resolve  : {
                    brands    : InventoryBrandsResolver,
                    categories: InventoryCategoriesResolver,
                    products  : InventoryProductsResolver,
                    tags      : InventoryTagsResolver,
                    vendors   : InventoryVendorsResolver
                }
            }
        ]
        /*children : [
            {
                path     : '',
                component: ContactsListComponent,
                resolve  : {
                    tasks    : ContactsResolver,
                    countries: ContactsCountriesResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : ContactsDetailsComponent,
                        resolve      : {
                            task     : ContactsContactResolver,
                            countries: ContactsCountriesResolver
                        },
                        canDeactivate: [CanDeactivateContactsDetails]
                    }
                ]
            }
        ]*/
    }
];
