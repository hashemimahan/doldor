'use client';
import { delay } from '@/libs/utility';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
 
export default function NotFound() {
    const router = useRouter();
    const items = useSelector((state) => state.counter.items);
    const {receiptId} = useParams();
    /* if (+receiptId > items.length) {
        delay(1500).then(() => {
            router.push(`/receipt/${items.length.toString()}`);
        })
    } */
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={`/receipt/${items.length.toString()}`}>Return Home</Link>
    </div>
  )
}