import motor from './assets/images/motor.JPG'
function HomePage() {
    const randomImgURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hostinger.com%2Ftutorials%2Fwebsite-color-schemes&psig=AOvVaw0UQ3Ei85MfzRHu0Bll83cL&ust=1700485219769000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDWuKGP0IIDFQAAAAAdAAAAABAE"
    return (
        <div>
            <h1>Welcome to the Little Lemon site</h1>
            <h2>add three images with some styling</h2>
            <h3>using import</h3>
            <img 
                height={300}
                src={motor}
                alt='an image of motorcycle'
            ></img>
            <h3>using require</h3>
            <img 
                height={300}
                // here we dont need to import the image
                src={require('./assets/images/motor.JPG')}
                alt='an image of motorcycle'
            ></img>
            <h3>using URL</h3>
            <img 
                height={300}
                // here we dont need to import the image
                src={randomImgURL}
                alt='an image of motorcycle'
            ></img>
        </div>
    )
}

export default HomePage
