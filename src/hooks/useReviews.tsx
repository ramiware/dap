import review1Thumb from "../assets/reviews/review1.png"
import review2Thumb from "../assets/reviews/review2.png"
import review3Thumb from "../assets/reviews/review3.png"
import review4Thumb from "../assets/reviews/review4.png"
import review5Thumb from "../assets/reviews/review5.png"


type Review = {
  id: string,
  thumb: string,
  name: string,
  rating: number,
  comment: string,
  reviewCount: number,
  link: string
}

const review1: Review = {
  id: '1',
  thumb: review1Thumb,
  name: "Jorge Barbosa",
  rating: 5,
  comment: "Real mechanics know about this place. This place is not only a gem to East York and Scarborough but to the whole GTA. This is the place to go for all your auto supplies. I highly recommend this place for your auto fundamentals such as batteries, brakes, pressure lines, suspension and hardware. Danforth auto parts is a highly reputable business with exceptionally high standards. Thank you Danforth Auto parts for making my day on every visit for well over a decade.",
  reviewCount: 1,
  link: 'https://g.co/kgs/fMa9oZ'
}

const review2: Review = {
  id: '2',
  thumb: review2Thumb,
  name: "Jessica MacDonald",
  rating: 5,
  comment: "This place was great. Friendly and knowledgeable guys in there. I got exactly what I needed after being given incorrect information at three different Canadian Tires. Highly recommend.",
  reviewCount: 57,
  link: 'https://g.co/kgs/vGHgD1'
}

const review3: Review = {
  id: '3',
  thumb: review3Thumb,
  name: "Valerie Allen",
  rating: 5,
  comment: "I was looking for brake parts for my 2001 Nissan and used google to find parts stores. I checked a couple of other places but they did not have the parts. I called Danforth Auto Parts and spoke to Peter, who was very friendly, found they had the parts and not only that at a lower price than any other place I could find. I was able to drive over and pick up my parts the same day! The shop is street front so needed to find a place to park but it is totally worth it. Peter and Steve are both very friendly, knowledgeable and gave excellent customer service. Thanks guys!!!",
  reviewCount: 3,
  link: 'https://g.co/kgs/at4hsV'
}

const review4: Review = {
  id: '4',
  thumb: review4Thumb,
  name: "RNJ Contractors",
  rating: 5,
  comment: "My wife and I get our parts from here, great service and prices, l highly recommend this place. All our friends and family will be recommended to go to there. Thank you guys!",
  reviewCount: 1,
  link: 'https://g.co/kgs/FCgyTF'
}

const review5: Review = {
  id: '5',
  thumb: review5Thumb,
  name: "Mohid Syed",
  rating: 5,
  comment: "This place was recommended to me by a friend after I was hearing a knocking sound near my front driver's side strut. Was advised it was probably a ball joint. Upon speaking to the rep at Danforth Auto Parts, he advised that since there are 2 parts to the ball joint and that instead of just replacing both that I should get it checked and find out which one is bad. Took his advice and went to my mechanic to have a look and turns out it was just a loose bolt. This is the most honest Auto parts store period. They could have easily milked me for $200+ but the rep could tell I was hesitant and went out of his way to help me out. Don't know his name but absolutely amazing staff over there would definitely recommend!!! Also with pricing, they are very honest with what you are paying and what you can expect. The best auto parts store period will definitely be coming back!",
  reviewCount: 35,
  link: 'https://g.co/kgs/92cCe7'
}



export function useReviews() {

  const dapReviews: Review[] = [];
  dapReviews.push(review1);
  dapReviews.push(review2);
  dapReviews.push(review3);
  dapReviews.push(review4);
  dapReviews.push(review5);

  return { dapReviews }
};