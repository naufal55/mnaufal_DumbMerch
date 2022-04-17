import React from "react";
import { Container, Row } from "react-bootstrap";
import CardProduct from "../Component/CardProduct";
import data from '../Assets/DataDummy.js'
const HomePages = () => {
  return (
    <div>
      <Container className="mt-3">
        <h4 className="text-danger my-4">Product</h4>
        <Row>
          {
            data.map((item)=>{ // export isi data dummy dengan map dengan create onjek baru 'item'
              return (
                <CardProduct nBarang={item.namabarang} harga={item.harga} stok={item.stok} />
              )
            })
          }
          {/* <CardProduct/> */}
        </Row>
      </Container>
    </div>
  );
};

export default HomePages;
