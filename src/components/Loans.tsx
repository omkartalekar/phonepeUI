import IconGrid from './IconGrid';

export default function Loans() {
  const items = [
    { icon: '👤', label: 'Personal\nLoan' },
    { icon: '📊', label: 'Mutual\nFunds Loan' },
    { icon: '🪙', label: 'Gold\nLoan' },
    { icon: '📈', label: 'Credit\nScore' },
  ];

  return <IconGrid title="Loans" items={items} />;
}
