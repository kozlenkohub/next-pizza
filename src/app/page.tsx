import { Container, Title, TopBar, Filters } from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-bold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizza"
                items={[
                  {
                    id: 1,
                    name: 'Margherita',
                    imageUrl:
                      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 2,
                    name: 'Margherita',
                    imageUrl:
                      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 3,
                    name: 'Margherita',
                    imageUrl:
                      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 4,
                    name: 'Margherita',
                    imageUrl:
                      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 5,
                    name: 'Margherita',
                    imageUrl:
                      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 6,
                    name: 'Margherita',
                    imageUrl:
                      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
                    items: [{ price: 10.99 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Combo"
                items={[
                  {
                    id: 1,
                    name: 'Margherita',
                    imageUrl:
                      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 2,
                    name: 'Margherita',
                    imageUrl:
                      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 3,
                    name: 'Margherita',
                    imageUrl:
                      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 4,
                    name: 'Margherita',
                    imageUrl:
                      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 5,
                    name: 'Margherita',
                    imageUrl:
                      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 6,
                    name: 'Margherita',
                    imageUrl:
                      'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
                    items: [{ price: 10.99 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
