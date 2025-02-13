
'use client'

import { useEffect, useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { useSearchParams } from 'next/navigation'
import { fetchProductSku } from '@/app/lib/products'
import { useQuery } from '@tanstack/react-query'
import { IProductDetail, IProductSku } from '@/app/types/products'
import useCartStore from '@/store/cartStore'


const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],

  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetailPage() {
  // 获取查询参数
  const searchParams = useSearchParams()
  const search = searchParams.get('id') || '1';
  const { addCart } = useCartStore()

  // 查询数据
  const { data: productWithSku } = useQuery<IProductDetail>(
    {
      queryKey: ['products', search],
      queryFn: () => {
        const data = fetchProductSku(search)
        return data
      },
      enabled: !!search

    })
  // 设置选中商品
  const [selectedItem, setSelectedItem] = useState<IProductSku>();
  console.log('total', selectedItem)


  useEffect(() => {
    if (productWithSku?.default_sku) {
      setSelectedItem(productWithSku.default_sku);
    }
  }, [productWithSku]);




  // 如果数据还没加载完或没有数据，显示加载状态
  if (!productWithSku?.product_sku) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">no found...</div>
      </div>
    )
  }
  // 商品添加购物车动作
  const handleAddCart = (selectedItem: IProductSku) => {
    const updateItem = {
      ...selectedItem,
      quantity: 1
    }
    addCart(updateItem)
  }

  return (
    <div className="bg-white">

      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600 ">
                {product.name}{ }11
              </a>
            </li>
          </ol>
        </nav>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1> */}
            <img
              alt="t"
              src={selectedItem?.image}

              className="h-100 w-full  object-cover object-center"
            />


          </div>


          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information </h2>

            <h2 className="text-2xl mb-4 font-bold tracking-tight text-gray-900 sm:text-3xl" >{productWithSku?.title}</h2>
            <h3 className="text-lg mb-4 font-bold tracking-tight text-gray-500 sm:text-xl" >{selectedItem?.title}</h3>

            <p className="text-3xl tracking-tight text-gray-900">${selectedItem?.price}</p>

            <div className="mt-10">
              {/* Sizes */}

              <div className="mt-10" >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedItem}
                    onChange={setSelectedItem}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4 "
                  >
                    {productWithSku?.product_sku.map((sku: IProductSku) => (
                      <Radio
                        key={sku.id}
                        value={sku}

                        disabled={!sku.stock}
                        className={classNames(
                          sku.stock
                            ? 'cursor-pointer bg-white text-gray-900 font-bold shadow-sm  data-checked'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200 data-[checked]:bg-blue-400',
                          'data-[checked]:bg-blue-400 group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
                        )}
                      >
                        {sku.size}

                      </Radio>
                    ))}

                  </RadioGroup>
                </fieldset>
                <button
                  type="submit"
                  onClick={() => selectedItem && handleAddCart(selectedItem)}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  加入购物车
                </button>
              </div>


            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">细节</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">


            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

  )
}