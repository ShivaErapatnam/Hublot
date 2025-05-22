import { ComponentProps } from '@sitecore-feaas/clientside';
import { Image, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

type Product = {
  url: {
    url: string;
  };
  title: {
    value: string;
  };
  model: {
    value: string;
  };
  price: {
    value: string;
  };
  image: {
    field: ImageField;
  };
};

interface Fields {
  data: {
    datasource: {
      productsList: {
        targetItems: Product[];
      };
    };
  };
}

type ProductListParams = ComponentProps & {
  fields: Fields;
};

export const Default = (props: ProductListParams) => {
  const prodList = props.fields.data.datasource.productsList.targetItems ?? [];
  if (prodList.length <= 0) return null;
  return (
    <div className="allproducts">
      {prodList.map((productItem: Product, index: number) => {
        return (
          <a href={productItem.url.url.replace('https://cm', '')}>
            <article key={index} className="product">
              <div className="productimage">
                <Image field={productItem.image.field} alt="test"></Image>
              </div>
              <div>
                <Text tag="h3" field={productItem.title} />

                <p>{productItem.price.value}</p>
              </div>
            </article>
          </a>
        );
      })}
    </div>
  );
};
