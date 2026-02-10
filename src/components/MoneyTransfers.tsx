import IconGrid from './IconGrid';

export default function MoneyTransfers() {
  const items = [
    { icon: '📞', label: 'To Mobile\nNumber' },
    { icon: '🏦', label: 'To Bank &\nSelf A/c' },
    { icon: '⬇️', label: 'Receive\nMoney' },
    { icon: '₹', label: 'Check\nBalance' },
  ];

  return <IconGrid title="Money Transfers" items={items} />;
}
