const FetchToken = () => {
    const AccessToken = localStorage.getItem('afreesmartAcessToken') || '';
    process.env.AFREESMART_ACCESS_TOKEN = AccessToken;
}

FetchToken()
export default FetchToken;