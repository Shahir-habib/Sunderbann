import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner-1.webp";
import bannerTwo from "../../assets/banner-2.webp";
import bannerThree from "../../assets/banner-3.webp";
import sunderbann from "../../assets/sunderbann.webp"
import {
  BookType,
  BookOpenText,
  Airplay,
  BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";

const categoriesWithIcon = [
  { id: 'poetry', label: 'Poetry', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2780/2780137.png' },
  { id: 'fiction', label: 'Fiction', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1044/1044944.png' },
  { id: 'mystery', label: 'Mystery', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1534/1534959.png' },
  { id: 'history', label: 'History', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1836/1836931.png' },
  { id: 'adult', label: 'Adult', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png' },
  { id: 'business', label: 'Business', imageUrl: 'https://cdn-icons-png.flaticon.com/512/993/993796.png' },
  { id: 'art', label: 'Art', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' },
  { id: 'music', label: 'Music', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1046/1046782.png' },
  { id: 'politics', label: 'Politics', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1783/1783672.png' },
  { id: 'travel', label: 'Travel', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1809/1809517.png' },
  { id: 'thriller', label: 'Thriller', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1534/1534959.png' },
  { id: 'drink', label: 'Drink', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1046/1046785.png' },
  { id: 'romance', label: 'Romance', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1044/1044943.png' },
  { id: 'childrens', label: 'Childrens', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1044/1044945.png' },
  { id: 'nonfiction', label: 'Nonfiction', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2780/2780180.png' },
  { id: 'spirituality', label: 'Spirituality', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1046/1046787.png' },
  { id: 'philosophy', label: 'Philosophy', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2780/2780196.png' },
  { id: 'contemporary', label: 'Contemporary', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2780/2780137.png' },
  { id: 'fantasy', label: 'Fantasy', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1534/1534960.png' },
  { id: 'comment', label: 'comment', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1381/1381628.png' },
  { id: 'science', label: 'Science', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1044/1044946.png' },
  { id: 'health', label: 'Health', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1044/1044947.png' },
  { id: 'horror', label: 'Horror', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1534/1534958.png' },
  { id: 'help', label: 'Help', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1046/1046786.png' },
  { id: 'religion', label: 'Religion', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1046/1046788.png' },
  { id: 'christian', label: 'Christian', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1046/1046789.png' },
  { id: 'crime', label: 'Crime', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1534/1534957.png' },
  { id: 'autobiography', label: 'Autobiography', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2780/2780180.png' },
  { id: 'biography', label: 'Biography', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2780/2780191.png' },
  { id: 'erotica', label: 'Erotica', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2780/2780193.png' },
  { id: 'cultural', label: 'Cultural', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1046/1046790.png' },
  { id: 'psychology', label: 'Psychology', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2780/2780195.png' },
  { id: 'humor', label: 'Humor', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1046/1046791.png' },
  { id: 'historical', label: 'Historical', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2780/2780197.png' },
  { id: 'novels', label: 'Novels', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2780/2780137.png' },
  { id: 'stories', label: 'Stories', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2780/2780185.png' },
  { id: 'suspense', label: 'Suspense', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1534/1534959.png' },
  { id: 'classics', label: 'Classics', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2780/2780138.png' },
  { id: 'academic', label: 'Academic', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2780/2780181.png' },
  { id: 'games', label: 'Games', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1046/1046792.png' },
  { id: 'parenting', label: 'Parenting', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1044/1044945.png' },
  { id: 'paranormal', label: 'Paranormal', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1534/1534961.png' }
];


const brandsWithIcon = [
  { id: "penguin", label: "Penguin" ,icon : BookOpenText},
    { id: "harpercollins", label: "HarperCollins" ,icon : BookOpenText},
    { id: "simonandschuster", label: "Simon & Schuster" ,icon : BookOpenText},
    { id: "macmillan", label: "Macmillan" ,icon : BookOpenText},
    { id: "randomhouse", label: "Random House",icon : BookOpenText },
];
function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    // }, 1500);

    // return () => clearInterval(timer);
  },[]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  //console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen bg-green-100">
      <div className="relative w-full h-[400px] overflow-hidden">
        {[sunderbann].map((slide, index) => (
              <img
                src={slide}
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
              />
            ))
        }
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) %
                featureImageList.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>
      <section className="py-12 bg-transparent"> {/* Removed gray background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Shop by category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categoriesWithIcon.map((categoryItem) => (
            <Card
              onClick={() =>
                handleNavigateToListingPage(categoryItem, "category")
              }
              className="cursor-pointer hover:shadow-lg transition-shadow"
              key={categoryItem.id}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <img 
                  src={categoryItem.imageUrl}
                  alt={categoryItem.label}
                  className="w-12 h-12 mb-4 object-contain"
                />
                <span className="font-bold">{categoryItem.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <Card
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;
