import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../component/Footer';
import styles from '../css/Bowl.module.css';

// const items = [
//     {
//         id: 1,
//         src: 'images/ing01.jpg',
//         title: '귀리',
//     },
//     {
//         id: 2,
//         src: 'images/ing02.jpg',
//         title: '찹쌀',
//     },
//     {
//         id: 3,
//         src: 'images/ing03.jpg',
//         title: '찰보리',
//     },
// ]

const items2 = [
    {
        id: 1,
        src: 'images/ing04.jpg',
        title: '로메인',
    },
    {
        id: 2,
        src: 'images/ing05.jpg',
        title: '멀티리프',
    },
    {
        id: 3,
        src: 'images/ing06.jpg',
        title: '적근대',
    },
    {
        id: 4,
        src: 'images/ing07.jpg',
        title: '라디치오',
    },
    {
        id: 5,
        src: 'images/ing08.jpg',
        title: '방울토마토',
    },
]

function Item({ item }) {
    return (
        <div className={styles.items}>
            <div className={styles.item__box}>
                <img src={item.src} alt="" />
            </div>
            <p>{item.title}</p> 
        </div>
    )
};


export default function Salad() {
    return (
        <div id="salad">
            <div className={styles.bowl}>
                <img src="images/salad01.jpg" alt="" />
                <dl>
                    <dt className={styles.bowl__text}>누구나 맛있게 즐길 수 있도록<br /> 100% 국내산 프리미엄 채소로만 구성된 샐러디</dt>
                </dl>
            </div>
            <div className={styles.content}>
                <div className={styles.lnbWrap2}>
                    <ul>
                        <li>
                            <h2>샐러디</h2>
                        </li>
                    </ul>
                </div>
                <div className={styles.saladWrap3}>
                    <ul>
                        <li className={styles.li__bg}><Link to="/salad">콜드컷그래놀라 샐러디</Link></li>
                        <li><Link to="/salad1">연어 샐러디</Link></li>
                        <li><Link to="/salad2">우삼겹메밀면 샐러디</Link></li>
                        <li><Link to="/salad3">리코타치즈 샐러디</Link></li>
                        <li><Link to="/salad4">콥 샐러디</Link></li>
                        <li><Link to="/salad5">탄단지 샐러디</Link></li>
                        <li><Link to="/salad6">시저치킨 샐러디</Link></li>
                    </ul>
                </div>
                <div className={styles.view}>
                    <div className={styles.view__tit}>
                        <h3>콜드컷그래놀라 샐러디</h3>
                        <p>풍미가득한 프리미엄 햄 카피콜라, 바삭한 그래놀라, 달콤한 스윗포테이토와의 단짠 조합(추천 드레싱:레드와인비니거)</p>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.view__arrow}>
                            <Link to="/salad1" className={styles.next}>next</Link>
                        </div>
                        <div className={styles.view__cont}>
                            <div className={styles.left__img}>
                                <img src="/images/menu02.jpg" alt="" />
                                {/* <div className={styles.tag__box}>
                                    <span className={styles.best}>BEST</span>
                                </div> */}
                            </div>
                            <div className={styles.right__txt}>
                                <div className={styles.text}>
                                    <strong>베이스</strong>
                                    <p>채소</p>
                                </div>
                                <div className={styles.text}>
                                    <strong>토핑</strong>
                                    <p>카피콜라, 스윗포테이토, 그래놀라, 올리브, 크랜베리, 통밀빵</p>
                                </div>
                                <div className={styles.text}>
                                    <strong>기본 드레싱</strong>
                                    <p>레드와인비니거</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.view__info}>
                        <div className={styles.view__tit}>
                            <h3>상세설명</h3>
                        </div>
                        <div className={styles.info__box} style={{border:"none"}}>
                            <div className={styles.info__tit}>
                                <img src="/images/info_img_1.png" alt="" />
                                <strong>곡물 구성</strong>
                            </div>
                            {/* <ul>
                                {items.map( (item) => (
                                    <li key={item.id}><Item item={item} /></li>
                                ))}
                            </ul> */}
                        </div>
                        <div className={styles.info__box}>
                            <div className={styles.info__tit}>
                                <img src="/images/info_img_2.png" alt="" />
                                <strong>채소 구성</strong>
                            </div>
                            <ul>
                                {items2.map( (item) => (
                                    <li key={item.id}><Item item={item} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.ingredient}>
                        <div className={styles.view__tit}>
                            <h3>영양성분표</h3>
                        </div>
                        <div className={styles.ing__table}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>메뉴</th>
                                        <th>열량(kcal)</th>
                                        <th>탄수화물(g)</th>
                                        <th>당류(g)</th>
                                        <th>단백질(g)</th>
                                        <th>지방(g)</th>
                                        <th>포화지방(g)</th>
                                        <th>나트륨(mg)</th>
                                    </tr>
                                    <tr>
                                        <td>콜드컷그래놀라 샐러디</td>
                                        <td>499.32</td>
                                        <td>57.45</td>
                                        <td>24.11</td>
                                        <td>13.82</td>
                                        <td>31.92</td>
                                        <td>7.49</td>
                                        <td>864.48</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}