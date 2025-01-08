import Hero from "../../../components/shared/Hero";
import ProductList from "../../../components/shared/ProductList";
import PublicLayout from "../../../layout/public";


export default function Home() {
    return(
        <>
            <PublicLayout>  {/* manggil sesuai dengan nama function */}
                <Hero/>
                <ProductList/>
            </PublicLayout>
        </>
    )
}