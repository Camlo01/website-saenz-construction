import { useEffect } from "react"
import Footer from "../../sections/footer/FooterSection"
import "./Gallery.css"

import { Link } from 'react-router-dom'


/**
 * 
 * @returns Component of Gallery page
 */
export default function Gallery() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, null)


    return (
        <>
            <div className="gallery_page">

                <Link to={"/"}>
                    <button className="yellow-button">back to home</button>
                </Link>

                <div className="gallery_title">

                    <div className="gallery_title__body">
                        <h1>Gallery</h1>
                        <p>View the beautiful videos and photos of our happy customers' home improvement projects.</p>
                    </div>

                    <button className="yellow-button">Before/After photos</button>

                </div>

                <section className="gallery_photos">

                    <div className="gallery_photos__card">

                        <h2>Roofing</h2>

                        <div className="photos_card__container">

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                        </div>

                        <a href="">Load more</a>

                    </div>



                    <div className="gallery_photos__card">

                        <h2>Roofing</h2>

                        <div className="photos_card__container">

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                        </div>

                        <a href="">Load more</a>

                    </div>



                    <div className="gallery_photos__card">

                        <h2>Roofing</h2>

                        <div className="photos_card__container">

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                        </div>

                        <a href="">Load more</a>

                    </div>



                    <div className="gallery_photos__card">

                        <h2>Roofing</h2>

                        <div className="photos_card__container">

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                            <div className="photos_card__container__imnage">
                                <img src="" alt="" />
                            </div>

                        </div>

                        <a href="">Load more</a>

                    </div>

                </section>

                <Footer />
            </div>
        </>
    )
}