import Head from 'next/head'

export default function Home() {
  return (
    <>
      <div>
        <main>
          <h2>Example</h2>
          <div className="card"> <h3>this is a card</h3> </div>
        </main>
      </div>
      <style jsx>
        {`
        
        h2{
          text-align:center;
          font-size:40px;
        }
        `}
      </style>
    </>
  )
}
