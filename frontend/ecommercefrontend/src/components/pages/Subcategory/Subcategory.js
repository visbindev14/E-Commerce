import { useParams } from 'react-router-dom';

function SubcategoryPage() {
    console.log("Hellooooooo")
    const { categoryName, subcategoryName } = useParams();

    return (
        <>
            <h1>Subcategory</h1>
            <p>Category: {categoryName.replace(/-/g, ' ')}</p>
            <p>Subcategory: {subcategoryName.replace(/-/g, ' ')}</p>
        </>
    );
}

export default SubcategoryPage;