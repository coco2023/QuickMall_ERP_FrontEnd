import { Route } from '@angular/router';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierListComponent } from './supplier/list/supplier.component';
import { InventoryBrandsResolver, InventoryCategoriesResolver, InventoryProductsResolver, InventoryTagsResolver, InventoryVendorsResolver } from 'app/modules/admin/ecommerce/product/product.resolvers';

export const supplierRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'supplier'
    },
    {
        path     : 'supplier',
        component: SupplierComponent,
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
