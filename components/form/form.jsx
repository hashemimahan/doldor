'use client';
import { addNewProduct } from "@/reducers/sales-invoice";
import React from "react";
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
	console.log(existingFactor)
	
  return (
    <>
      <form className="w-full h-auto" dir={"rtl"}>
      <table dir="rtl" style={{margin: "15px auto", width: "90%"}}>
	<thead>
		<tr>
		{headings.map(item => <th key={crypto.randomUUID()}>{item}</th>)}
		</tr>
		
		</thead>
		
		<tbody>
		{/* {findCustomerId && findCustomerId.customer.map(item => {
			return <tr key={item.id}>
				<td>{item.productsDetail.select}</td>
				<td>{item.productsDetail.code}</td>
				<td>{item.productsDetail.barCode}</td>
				<td>{item.productsDetail.product}</td>
				<td>{item.productsDetail.number}</td>
				<td>{item.productsDetail.price}</td>
				<td>{item.productsDetail.discount}</td>
				<td>{item.productsDetail.totalAmount}</td>
				<td>{item.productsDetail.stock}</td>
				<td>{item.productsDetail.remove}</td>
			</tr>
		})} */}
					{/* <tr>
		<td>2</td>
		<td>برنج</td>
		<td>60.000 تومان</td>
		<td>5 کیلو گرم</td>
		<td>300.000 تومان</td>
		</tr>
					<tr>
		<td>3</td>
		<td>ماکارونی</td>
		<td style={{color: "green"}}>50.000 هزار تومان</td>
		<td>3 عدد</td>
		<td>150.000 تومان</td>
		</tr>
					<tr>
		<td>4</td>
		<td>مایع دستشویی</td>
		<td>95.000 تومان</td>
		<td>1 عدد</td>
		<td>95.000 تومان</td>
		</tr>
						<tr>
		<td>5</td>
		<td>شیر</td>
		<td>18.000 تومان</td>
		<td>2 عدد</td>
		<td>36.000 تومان</td>
		</tr> */}
		</tbody>
	
		<tfoot>
			<tr>
			<th>{10000}</th>
				<th colSpan="4">761.000 تومان</th>
			</tr>
			<tr>
			<th> تعداد نوع محصول</th>
				<th colSpan="4">5 عدد</th>
			</tr>
		
		</tfoot>
	
	</table>
	<button type={"button"} className={"text-4xl font-bold border p-4"} onClick={() => {
		
		// dispatch(addNewProduct(newItem));
	}}>
		addNewItem
	</button>
      </form>
    </>
  );
};

export default Form;
