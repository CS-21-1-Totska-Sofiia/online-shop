import { defineStore } from 'pinia';

export const useGoodStore = defineStore('good', {
    state: () => ({
        goods: [],
    }),

    actions: {
        async getGoods(category) {
            this.fetched = false;
            this.goods = [];
            const data = await fetch(`http://localhost:3010/goods/${category}`);
            const goods = await data.json();
            for (let i = 0; i < goods.length; i++) {
                goods[i].urlObj = await this.getImg(goods[i].imgUrl);
            }
            this.goods = goods;
            this.fetched = true;
        },
        async getImg(url) {
            const resp = await fetch(url);
            const blob = await resp.blob();
            return URL.createObjectURL(blob);
        }
    }
});