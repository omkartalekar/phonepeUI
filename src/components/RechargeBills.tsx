import IconGrid from './IconGrid';

export default function RechargeBills() {
  const items = [
    { icon: '📱', label: 'Mobile\nRecharge' },
    { icon: '💳', label: 'Credit Card\nBill' },
    { icon: '💡', label: 'Electricity\nBill' },
    { icon: '💰', label: 'Loan\nRepayment' },
  ];

  return <IconGrid title="Recharge & Bills" items={items} />;
}
