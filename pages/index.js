import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 'auto',
    },
  },
  customBorder: {
    borderRadius: '30px'
  },
  mt: {
    marginTop: '1rem'
  }
}));

export default function Home() {
  const clases = useStyles()
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <div className="col">
        <div className="divcolored" style={{ backgroundColor: '#7ed6df' }}>
          <h2>Sign up or login</h2>
          <h2>Join us</h2>

        </div>
        <div className="divcolored">
          <h2 style={{marginBottom:'5rem'}}>A simple app</h2>
          <div className={clases.mt}>
            <Link href="/login">
              <Button className={clases.customBorder} variant="contained" color="primary" size='small' fullWidth>
                Login
            </Button>
            </Link>
          </div>
          <div className={clases.mt}>
            <Button className={clases.customBorder} variant="outlined" color="primary" size='small' fullWidth onClick={() => Router.push('/signup')}>
              Signup
            </Button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .divcolored{
          height:100vh;
          padding: 20%;
          max-height: max-content;
        }
        h2{
          text-align:center;
          text-font:40px;
        }
        .col{
          column-count:2;
          column-width: 400px;
          column-height:100px;
          text-align:justify;
        }
        `}
      </style>
    </>
  )
}
