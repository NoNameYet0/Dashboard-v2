import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetProductByIdQuery,
} from "../../features/products/products.api.slice";
import { toast } from "react-toastify";
import Button from "../../components/button/button.component";
import Modal from "../../components/modal/modal.component";
import { StyledConfirmDeleteText } from "../program-details/program-details.styles";
import EditProductForm from "../../components/product-forms/edit-product-form.component";
import SellProductForm from "../../components/product-forms/sell-product-form.component";

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] =
    useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);

  const [isSellProductModalOpen, setIsSellProductModalOpen] = useState(false);

  const { productId } = useParams();
  const from = location.state?.from;

  const {
    data: productData,
    isLoading,
    isError,
  } = useGetProductByIdQuery({
    id: productId,
  });
  const product = productData?.data;

  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  if (isLoading) return <p>Loading...</p>;

  if (isError || !product) return <p>something went wrong</p>;

  const handleDelete = async (productId: string) => {
    try {
      await deleteProduct(productId).unwrap();

      navigate(`/sales/${from}`, { replace: true });

      setTimeout(() => {
        toast.success("Product Successfully Deleted", {
          position: "top-right",
          closeOnClick: true,
          draggable: true,
        });
      }, 500);
    } catch (err) {
      if (err) {
        toast.error("something went wrong", {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
        });
      }
    }
  };

  return (
    <>
      <Button onClick={() => navigate(`/sales/${from}`)}>
        Back to All Products
      </Button>
      <Button onClick={() => setIsEditProductModalOpen(true)}>
        Edit Product Details
      </Button>
      <Modal
        open={isEditProductModalOpen}
        closeModal={() => setIsEditProductModalOpen(false)}
        title="Edit Product Details"
      >
        <EditProductForm
          product={product}
          toggleModalOpen={setIsEditProductModalOpen}
        />
      </Modal>
      <Button redColored onClick={() => setIsConfirmDeleteModalOpen(true)}>
        Delete Product
      </Button>
      <Modal
        open={isConfirmDeleteModalOpen}
        closeModal={() => setIsConfirmDeleteModalOpen(false)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <StyledConfirmDeleteText>
            Do You Want To Delete This Product
          </StyledConfirmDeleteText>
          <Button
            redColored
            onClick={() => handleDelete(product._id)}
            isLoading={isDeleting}
          >
            Confirm Delete
          </Button>
        </div>
      </Modal>
      <div
        style={{
          cursor: "pointer",
        }}
      >
        <img src={product.image} alt="product-image" width={500} height={500} />
        <p>{product.productName}</p>
        <p>{product.inventoryCount}</p>
        <p>{product.description}</p>
        <p>Revenue {product.totalRevenue}</p>
      </div>
      <Button onClick={() => setIsSellProductModalOpen(true)}>
        Sell Product
      </Button>
      <Modal
        open={isSellProductModalOpen}
        closeModal={() => setIsSellProductModalOpen(false)}
        title="Sell Product"
      >
        <SellProductForm product={product} />
      </Modal>
    </>
  );
};
export default ProductDetails;
