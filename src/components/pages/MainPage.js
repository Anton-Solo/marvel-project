import { useState } from "react";
import {Helmet} from 'react-helmet';

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearch from "../charSearch/CharSearch";
import ErrorBoundry from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <>
            <Helmet>
            <meta
                name="description"
                content="Marvel information portal"
                />
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBoundry>
                <RandomChar/>
            </ErrorBoundry>
            <div className="char__content"> 
                <ErrorBoundry>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundry>
                    <div className="wrapper">
                        <ErrorBoundry>
                            <CharInfo charId={selectedChar}/>
                        </ErrorBoundry>
                        <ErrorBoundry>
                            <CharSearch />
                        </ErrorBoundry>
                    </div>
               
            </div>
        </>
    )
}

export default MainPage;