import 'reflect-metadata';
import { assert } from "./test-config";
import {
    async,
    inject,
} from "@angular/core/testing";
import { ReflectiveInjector } from "@angular/core";
import { ItemsComponent } from "../item/items.component";
import { ItemService } from "../item/item.service";

describe("Testing items component", () => {
    let item: ItemsComponent;

    beforeEach(() => {
        let injector = ReflectiveInjector.resolveAndCreate([
            ItemsComponent, ItemService
        ]);

        item = injector.get(ItemsComponent);
        item.ngOnInit();
    });

    it("Testing number of items", () => {
        assert.strictEqual(item.items.length, 22)
    });


});
