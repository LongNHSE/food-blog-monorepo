export default function Index() {
  console.log(
    'Component đang chạy trên:',
    typeof window === 'undefined' ? 'Server' : 'Client'
  );

  return (
    <div>
      <div className="wrapper">Home Page</div>
    </div>
  );
}
