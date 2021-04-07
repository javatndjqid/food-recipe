<template>
  <div>
    <v-card class="mx-auto" max-width="1000px" max-height="100%">
      <v-simple-table dark>
        <template v-slot:default>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in purchaseOrderList" :key="i" :item="item">
              <td>{{ item.orderDate }}</td>
              <td v-for="(product, j) in item.orderProduct" :key="j">
                제품명 : {{ product.productName }}
                <br />
                제품 가격 : {{ product.productPrice }}원
                <br />
                주문 수량: {{ product.productQuantity }}
                <br />
                총 금액 : {{ product.productPrice * product.productQuantity }}원
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>
<script>
import api from "@/api/Market";
export default {
  data: () => ({
    purchaseOrderList: [],
    orderProduct: [],
  }),
  mounted() {
    this.purchaseOrder();
  },
  methods: {
    async purchaseOrder() {
      const result = await api.purchaseOrder();
      if (result.status == 200) {
        this.purchaseOrderList = result.data;
      }
    },
  },
};
</script>