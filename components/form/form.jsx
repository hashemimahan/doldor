'use client';
import {addNewProduct, decrease, increase, removeAllProducts, removeProductItem} from "@/reducers/sales-invoice";
import React, { Fragment } from "react";
import { FaTrashAlt } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";


const headings = ["انتخاب","کد","بارکد","کالا","مقدار","قیمت","تخفیف","مبلغ کل","موجودی","حذف"];

const Form = ({ factorId }) => {
	let existingFactor = useSelector(state => state.salesInvoice.customers);
	// let totalAmount = useSelector(state => state.salesInvoice.totalAmount);
	let dispatch = useDispatch();
	/* let findCustomerId = existingFactor.find(item => item.customer.customerId === factorId);
	console.log(findCustomerId)
	console.log(findCustomerId && findCustomerId[0]) */
	let products = existingFactor[+factorId-1].products;

	console.log(existingFactor[+factorId-1].totalPrice);

	const onChangeProductHandler = (code, action) => {
		let payload = {
			customerId: +factorId,
			productCode: code,
		}
		if (action === "increase") {
			dispatch(increase(payload));
			return
		}
		dispatch(decrease(payload))
	}

	const onRemoveProductItemHandler = (code) => {
		let payload = {
			customerId: +factorId,
			productCode: code,
		}
		dispatch(removeProductItem(payload))
	}

	const onRemoveAllProductHandler = () => {
		let payload = {
			customerId: +factorId,
		}
		dispatch(removeAllProducts(payload));
	}

  return (
    <>
		<form className="w-full h-auto" dir={"rtl"}>
			<table dir="rtl" style={{margin: "15px auto", width: "96%"}}>
				<thead>
				<tr>
					{headings.map((item, index) => <th key={crypto.randomUUID()} colSpan={index === 3 ? 3 : 1}>{item}</th>)}
				</tr>

				</thead>

				<tbody>
				{products.map(item => {
					return (
						<tr key={"123456789"}>
							<td className={"tableRows"}>{item.select}</td>
							<td className={"tableRows"}>{item.code}</td>
							<td className={"tableRows"}>{item.barCode}</td>
							<td className={"tableRows"} colSpan={3}>{item.product}</td>
							<td className={"flex border-none outline-none gap-4 text-4xl font-iranYekan justify-center items-center"}>
								<button type={"button"}
										onClick={() => onChangeProductHandler(item.code, "increase")}>+
								</button>
								{item.number}
								<button type={"button"}
										onClick={() => onChangeProductHandler(item.code, "decrease")}>-
								</button>
							</td>
							<td className={"tableRows"}>{item.price}</td>
							<td className={"tableRows"}>{item.discount}</td>
							<td className={"tableRows"}>{item.totalAmount}</td>
							<td className={"tableRows"}>{item.stock}</td>
							<td className={"tableRows cursor-pointer"}
								onClick={() => onRemoveProductItemHandler(item.code)}>{item.remove}</td>
						</tr>
					)
				})}
				</tbody>
				<tfoot>
				<tr>
					<td>{false}</td>
					<td>{false}</td>
					<td>{false}</td>
					<td colSpan={3}>{false}</td>
					<td>{false}</td>
					<td className="text-2xl font-iranYekanRegular font-black">{existingFactor[+factorId-1].totalAmount}</td>
					<td className="text-2xl font-iranYekanRegular font-black">{existingFactor[+factorId-1].totalDiscount}</td>
					<td className="text-2xl font-iranYekanRegular font-black">{existingFactor[+factorId-1].totalPrice}</td>
					<td>{false}</td>
					<td className="tableRows cursor-pointer" onClick={onRemoveAllProductHandler}>
						<FaTrashAlt/>
					</td>
				</tr>
				<tr>
					<td colSpan={2} className="p-0">
						<button className="w-full h-full">انتقال به مانده مشتری</button>
					</td>
					<td>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
				</tr>
				<tr>
					<td colSpan={2} className="p-0">
						<button className="w-full h-full">انتقال به انبار</button>
					</td>
					<td>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
				</tr>
				<tr>
					<td colSpan={2} className="p-0">
						<button className="w-full h-full">انتقال به بیرون</button>
					</td>
					<td>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
				</tr>
				<tr>
					<td colSpan={2} className="p-0">
						<p className="w-full h-full">نام مشتری</p>
					</td>
					<td>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
				</tr>
				<tr>
					<td colSpan={2} className="p-0">
						<p className="w-full h-full">توضیحات</p>
					</td>
					<td>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
				</tr>
				<tr>
					<td colSpan={2} className="p-0">
						<p className="w-full h-full">آدرس</p>
					</td>
					<td>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
				</tr>
				<tr>
					<td colSpan={2} className="p-0">
						<p className="w-full h-full">امتیاز مشتری</p>
					</td>
					<td>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
					<td colSpan={2}>123456789</td>
				</tr>

				</tfoot>

			</table>
			<button type={"button"} className={"text-4xl font-bold border p-4"} onClick={() => {
				let newItem = {
					customerId: +factorId,
					productCode: 9875463110,
					productsDetail: {
						select: <input type={"checkbox"}/>,
						code: 9875463110,
						barCode: 12345667,
						product: "سیروپیاز",
						number: 1,
						price: 100000,
						pricePerOne: 100000,
						discount: 15000,
						discountPerOne: 15000,
						totalAmount: 85000,
						stock: 5,
						remove: <FaTrashAlt/>,
					},
					// id: 1
				}
				dispatch(addNewProduct(newItem));
			}}>
				addNewItem
			</button>
			<button type={"button"} className={"text-4xl font-bold border p-4"} onClick={() => {
				let newItem = {
					customerId: +factorId,
					productCode: 1234656789,
					productsDetail: {
						select: <input type={"checkbox"}/>,
						code: 1234656789,
						barCode: 12345667,
						product: "خیار",
						number: 1,
						price: 50000,
						pricePerOne: 50000,
						discount: 5000,
						discountPerOne: 5000,
						totalAmount: 45000,
						stock: 5,
						remove: <FaTrashAlt/>,
					},
					// id: 1
				}
				dispatch(addNewProduct(newItem));
			}}>
				addNewItem2
			</button>
			<button type={"button"} className={"text-4xl font-bold border p-4"} onClick={() => {
				let newItem = {
					customerId: +factorId,
					productCode: 789321000,
					productsDetail: {
						select: <input type={"checkbox"}/>,
						code: 789321000,
						barCode: 12345667,
						product: "ماست",
						number: 1,
						price: 90000,
						pricePerOne: 90000,
						discount: 10000,
						discountPerOne: 10000,
						totalAmount: 80000,
						stock: 7,
						remove: <FaTrashAlt/>,
					},
					// id: 1
				}
				dispatch(addNewProduct(newItem));
			}}>
				addNewItem3
			</button>
		</form>
	</>
  );
};

export default Form;
