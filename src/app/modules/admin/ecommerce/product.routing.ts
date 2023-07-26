import { Route } from '@angular/router';
import { ProductComponent } from 'app/modules/admin/ecommerce/product/product.component';
import { ProductListComponent } from 'app/modules/admin/ecommerce/product/list/product.component';
import { InventoryBrandsResolver, InventoryCategoriesResolver, InventoryProductsResolver, InventoryTagsResolver, InventoryVendorsResolver } from 'app/modules/admin/ecommerce/product/product.resolvers';

export const productRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'product'
    },
    {
        path     : 'product',
        component: ProductComponent,
        children : [
            {
                path     : '',
                component: ProductListComponent,
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
