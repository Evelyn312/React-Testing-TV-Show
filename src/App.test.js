import React from "react";
import { render, waitFor} from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import userEvent from "@testing-library/user-event";

jest.mock("./api/fetchShow");
// console.log("mock", mockFetchShow);

const EpisodesData = {
    data: {
        id: 2993,
        url: 'http://www.tvmaze.com/shows/2993/stranger-things',
        name: 'Stranger Things',
        type: 'Scripted',
        language: 'English',
        genres: [
          'Drama',
          'Fantasy',
          'Science-Fiction'
        ],
        status: 'Running',
        runtime: 60,
        premiered: '2016-07-15',
        officialSite: 'https://www.netflix.com/title/80057281',
        schedule: {
          time: '',
          days: [
            'Thursday'
          ]
        },
        rating: {
          average: 8.7
        },
        weight: 98,
        network: null,
        webChannel: {
          id: 1,
          name: 'Netflix',
          country: null
        },
        externals: {
          tvrage: 48493,
          thetvdb: 305288,
          imdb: 'tt4574334'
        },
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg'
        },
        summary: '<p>A love letter to the \'80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>',
        updated: 1592804211,
        _links: {
          self: {
            href: 'http://api.tvmaze.com/shows/2993'
          },
          previousepisode: {
            href: 'http://api.tvmaze.com/episodes/1576476'
          }
        },
        _embedded: {
          episodes: [
            {
              id: 553946,
              url: 'http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers',
              name: 'Chapter One: The Vanishing of Will Byers',
              season: 1,
              number: 1,
              airdate: '2016-07-15',
              airtime: '',
              airstamp: '2016-07-15T12:00:00+00:00',
              runtime: 60,
              image: {
                medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
                original: 'http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg'
              },
              summary: '<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy\'s friends conduct their own search, and meet a mysterious girl in the forest.</p>',
              _links: {
                self: {
                  href: 'http://api.tvmaze.com/episodes/553946'
                }
              }
            },
            {
              id: 578663,
              url: 'http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street',
              name: 'Chapter Two: The Weirdo on Maple Street',
              season: 1,
              number: 2,
              airdate: '2016-07-15',
              airtime: '',
              airstamp: '2016-07-15T12:00:00+00:00',
              runtime: 60,
              image: {
                medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg',
                original: 'http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg'
              },
              summary: '<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>',
              _links: {
                self: {
                  href: 'http://api.tvmaze.com/episodes/578663'
                }
              }
            },
            {
              id: 578664,
              url: 'http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly',
              name: 'Chapter Three: Holly, Jolly',
              season: 1,
              number: 3,
              airdate: '2016-07-15',
              airtime: '',
              airstamp: '2016-07-15T12:00:00+00:00',
              runtime: 60,
              image: {
                medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg',
                original: 'http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg'
              },
              summary: '<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>',
              _links: {
                self: {
                  href: 'http://api.tvmaze.com/episodes/578664'
                }
              }
            },
            
            {
              id: 578669,
              url: 'http://www.tvmaze.com/episodes/578669/stranger-things-1x08-chapter-eight-the-upside-down',
              name: 'Chapter Eight: The Upside Down',
              season: 1,
              number: 8,
              airdate: '2016-07-15',
              airtime: '',
              airstamp: '2016-07-15T12:00:00+00:00',
              runtime: 60,
              image: {
                medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168926.jpg',
                original: 'http://static.tvmaze.com/uploads/images/original_untouched/67/168926.jpg'
              },
              summary: '<p>Jim convinces Brenner to let him and Joyce enter the Upside Down to find Will... unaware that Brenner plans to recover Jane no matter what it takes. Meanwhile, Nancy and Jonathan prepare to trap the monster at the Byers house, but receive an unexpected visitor.</p>',
              _links: {
                self: {
                  href: 'http://api.tvmaze.com/episodes/578669'
                }
              }
            },
            
            {
              id: 909343,
              url: 'http://www.tvmaze.com/episodes/909343/stranger-things-2x03-chapter-three-the-pollywog',
              name: 'Chapter Three: The Pollywog',
              season: 2,
              number: 3,
              airdate: '2017-10-27',
              airtime: '',
              airstamp: '2017-10-27T12:00:00+00:00',
              runtime: 60,
              image: {
                medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/132/332039.jpg',
                original: 'http://static.tvmaze.com/uploads/images/original_untouched/132/332039.jpg'
              },
              summary: '<p>Dustin takes in a stray and calls it D\'Artagnan. However, his plans to show it to Mr. Clarke don\'t go as intended. Meanwhile, Max tries to convince Mike to let her join the group, El sneaks out to pay her friends a visit, and Will decides to take a stand and face his fears.</p>',
              _links: {
                self: {
                  href: 'http://api.tvmaze.com/episodes/909343'
                }
              }
            },

          ]
        }
      }
}

test("successfully renders from api", async() => {

    mockFetchShow.mockResolvedValueOnce(EpisodesData);


    const {getByText, findByText, getAllByTestId} = render(<App />);

    await getByText(/fetching data.../i);
    
    let dropDown = getByText(/select a season/i);
    userEvent.click(dropDown);

    const season1 = await findByText(/season 1/i);
    userEvent.click(season1);


    expect(mockFetchShow).toHaveBeenCalled();

    await waitFor(() => {
        expect(getAllByTestId("episode")).toHaveLength(4);
    })
});