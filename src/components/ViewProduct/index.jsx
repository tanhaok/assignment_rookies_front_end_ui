import { Rating } from "@mui/material";
import { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProductById } from "../../service/ProductService";

const ViewProduct = () => {
  let { id } = useParams();
  const [product, setProduct] = useState();
  const rate = [
    {
      rate: 3,
      comment: "This is best of the book I have read before",
    },
    {
      rate: 5,
      comment:
        "To make the journey into The Power of Now, we will need to leave our analytical mind and its false created self, the ego, behind. ",
    },
    {
      rate: 2,
      comment:
        " Although the journey is challenging, Eckhart Tolle offers simple language and a question and answer format to guide us.",
    },
    {
      rate: 2,
      comment:
        " Surrender to the present moment, where problems do not exist.  It is here we find our joy,",
    },
    {
      rate: 6,
      comment:
        " are able to embrace our true selves and discover that we are already complete and perfect. ",
    },
    {
      rate: 5,
      comment: "If we are able to be fully present and take each step in ",
    },
    {
      rate: 4,
      comment:
        "the Now we will be opening ourselves to the transforming experience of The Power of Now. ",
    },
  ];

  useState(() => {
    if (id) {
      getProductById(id)
        .then((res) => {
          setProduct(res.data);
          console.log();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  if (product) {
    return (
      <div
        className="show-product w-100 d-flex flex-column align-items-center"
        style={{ margin: "3rem 0" }}
      >
        <div
          className="product-details d-flex w-75 justify-content-center"
          style={{ padding: "3rem" }}
        >
          <div
            className="product-image w-25"
            style={{ width: "20rem", height: "30rem", marginRight: "2rem" }}
          >
            <Carousel>
              {(product.productImages || []).map((img) => (
                <Carousel.Item key={img.id}>
                  <img
                    src={img.imgUrl}
                    alt="First slide"
                    className="w-100 d-block"
                    style={{ width: "20rem", height: "30rem" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="product-info w-75">
            <div className="info">
              <div className="cate text-muted fs-5  ">
                {product.category.name}
              </div>
              <div className="name fs-1 text-break">{product.name}</div>
              <div className="star">
                <Rating
                  name="half-rating-read small"
                  defaultValue={3}
                  precision={0.5}
                  readOnly
                />
              </div>
              <div className="price fs-4 fw-bold">$ {product.price}</div>
            </div>
            <div className="btn">
              <Button variant="primary">Add To Cart</Button>
            </div>
          </div>
        </div>
        <div className="product-show-more w-75">
          <div
            className="product-description w-100 text-center"
            style={{ padding: "1rem" }}
          >
            <div className="fs-5 text-decoration-underline">Description: </div>
            <div className=" text-break">{product.description}</div>
          </div>
          <div className="product-rate">
            {rate.map((ele) => (
              <div className="rate">
                <div className="star">
                  <Rating
                    name="half-rating-read small"
                    defaultValue={ele.rate}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className="comment">{ele.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>fail</div>;
  }
};

export default ViewProduct;

// TODO: change max length of product description in db
