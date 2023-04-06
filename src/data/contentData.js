const contentData = [
  {
    title: "영원한 우리들의 친구, Chat gpt",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA51BMVEURooH///8ToYERo37//f/9//4OpIH8/v/6/////f4PpH4AoHn8//0AnHj/+//O7+r0//8Alnn///t/xrJ/w7YGmoDf9vOd1sjs//kAmHUAl3YAnnnw//8Am3QAnHwLpn5EqpJyvqxdt59vu6UimoCs4dUAnHGUy8Cz4Nij1sxBqop2xK5hv6QApnoxq41RsJrB7OPY+PWv2NE6o4pjtaZKtZaKz77F6OLv+f253dbb/Prr+fSZ2sp9zbi85dl9vbF1saAAi2seln9kr5dcqpuUxLpIn4vM9/MApnLR6ufk//0znIWOz8J+wEamAAARbklEQVR4nO1dC1caybbuenVXVT+oBoH0GxARdBQIRuMkE+8kcydX4v//PXfvAhNNzJmzzlqznNPWZ3y1EOlv7b3r248qPc/BwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBweGfAp96/nO/hv8G+ACPAlnw7lF7ZffJ4SlQpMqjvlcXcRwXjCJ3Dk9Ba0b7/TqPTybj09PTX05oVgNZ1LnlE2C6OcvOD1avJLGQZnW3jMPGWdcPoJQV2WQVEBHxAOkKAFKuD+qU+o6uR2C+X42upOBKKSHQsCJBlILP69O4sGzZhZJSzZ77tT47aJi9lhIsCj4AR/CmhIkIl4rL1QYCl2Z690jNXjZbYDf1pkMCxeEN2BHC8oaEiSBJ1PYipFprqyR8R1b8ZksIUBQoJcvOsDce94ard1JJjtQR06tYUad5XhQMFseGNfAs9jJZY/Go5JIEUcLNakyrKg7DMMvqyVEpEySLy4Pp5PTy8vLgcJRlMSyc9GWSBbo9HG2JikQUkas3WY2XdtfjjL4GywpItHNLKygG84Pz6qValu/prIM0dJOylxdfr1PU8yz71LFr4jcAd2/ny1mIedEzvuzngabVkYpQWJXLmf52HSyLsbo6e02+QxAkwlyfhP3ne83PBna2lKQrFPl1E36XC56F8UGpxM6g7EdYHhXnURSp8iB9rlf8XECVmXfAzyTf/hk3D6miXlF9uhURsiTFNy/kQhKVdBN5VIfP9rqfBUBWcWFNRvYyxnz/W9bMsvO5hOxHgKbnxHTmx6eHp8evO0ZwUBhdGfDVS6pKADGgzOOVQK6uZhRyQHvzPnz2a/o+4WWkIJ+GDPHYz6qwKOKmqlivA94YSVgmB/0XEuStCfm0jjdBF8gyn8LdbQNTGi6n43fEgE1FkSSDcR3HWOrC4qDXVPnhmnOrv1bxi+AKHZA1WTi+XgccyLqt9nUr5CPNlislA4kZYmLupnWDuc4etc/C+n2ZcCFEssib1pe7diW9anlk0AMDiFnj2NKEUYim50ckAQfELNrMN8gHZV9LzOikTXZa4voYmXH9vHfyd8O3ZNWV/8EQvpcEZV03GKk83a/rBeh50KgKXK1zkRWe9T5bbr7ny6PZ2KggCMw6bbdl2bjuV7+VHPJkS5YincxrKNWaxdnpAEwKBb0yoKUKjcbm7/Htf/Cqngwi0Kd3GWt5Q6gJ0xXkzZIknFuyjioGIqvR8bJDRISxiqtXwyLUTWOtCnnyHwgFuFJ9AA+WyXaq+y0mC0gpNrdCGUhyOEZxwGXBNK6Nv0AoElgiDcqjUeV5+xLplM3oCKxslwMxe82fvusKqeRl0eqWBgunnyGAy64CrXltY1YPyNIo5pMIVCj4ZmeSYasCuQL5dcaO35adwwwegmRh/KJefEnAXVWnaHWNXse3iQm4NGRwWN1gakx6IUMi4kEUgGQQ73pViGV58D5feyztDTAtlNejnGFZeRfwvSloVlCnJ15be7HoR9URiUgQcD6M4/gAzMiSxcBo4gEJTBIspvnO13x/6jWzSUdYeZEE8j3NYNEE40K2smtMhshl3eKkJzxVQiVgWGPIcMLed2SJ5GoDVmXbE5ZZeg1UlbgOQDpIyl7KfPtT3w9PSQCL6Spvq2XBfbEB1lgC80vWp/Ts5juyjDwJfcrQWCAU1fWwhHXAJCLgQQRfEN75lDUaHgyajGIVQg3StpIFpjKUQRfuG6sMmoY/uGE5wi6ilaBFPl4THgkij/6YG94FUSEkNx82ua8b8NNsrQLJy5S2tL7s66kJAhWQeUWfJIubEXwBISluZsuVTGSiyGAS1/mnDugECOhBIMrhtGiwiANiDcjqU/3Xv/i/EX5xDLGH8Lcxm/o/kFVYsnaWNdvMTRKZRP7ai0PqN2fZDTopCFZIg7bjNGxYfpVIk5hNv3nu2/o7AOs9xnCQnZdhozFFfExWiKvhCMSFX+R3JXbwu2YxjamnsYhaTfGast1XuQIhls1Rw8vzaSvJ8vx6CVQJ/iukPM1PyYLAdvgOvpJCvfqfGdMMAhS1baDzOTC4a1bL+eb3FSyU3NB2WhYsb3dgVhFZZOhq3vdkgRtKICtfXhEZReBjSpWLj/EZFpw9WyvMQHRxFcEKCaHr+C3KCQjwrSTLp9lKSR7JCZahwGR+DPBCnnw5KgknEX8Ly2agyOdeWnh031Kl6ceDd0CkVJHcNzAGeTsHa8A01hyywnKD3z1JljLDrVJJIsycTjqJ5IESqzf5Pk/EgdOCLsoA2OKBJUt9yJqWknWOQw2ik6NXYdbyA1kSbMmoRK5GsV/nv22ToNvF+JTZugyE/ob2w/MV4TLBejQ8+6BopXIAhkaSK0muUrSFR5YFenynsziHYLUe73LAol6UsgseV95ZaQUJEJhRE6aTDt/NP4hg007DgptdguVEZF7/K7Lk9q62vR6IRbQ6uTKKJAlZj+MC1QZIWb9p0rq3TbD6DCoka6VlwZ1egGUBWTs3fEQWqHbrhlzNIZ2hdigSV8E4vViLQBpOVssK1wXf+i/NTq5IEAllzEXR0txwaTDQXGX49UOyGo9hoQsCfDlJ60c37+v0GuI4IQnE/BC7Gvju+yxdkKArZFTS4ulf9t+O0Ssk67b+3rK+kkXkyH9QU7cdnfg96FjMoUl5Wdun2qYHwzFUAQnP0ezZ7ufvA9x3OsDWTTndrYa+d0/WGf7cjwfgcKOH+wRsMzF8D/LLIF9GDS5SS5dH+6Dor7kAFSGXLQzxQEJ2BTccyMne0dCyEKeFh61UIMsm0o/AvHAIjB5/+gxiVAly9UdmFTvD0DUQREV8VbHWNS0gaFd3oLkNpjsWWCkFVzLHVYyzafFA/UiW1gWS9b76+L9bEO5RUC5OYntdT4sxdoe42bSPLDCtcCJBpCdbj9nyJmtGkAVCMryYnmkKlhX8SJav4yF46jD2w821JN0oUIPlbk3se7NbLkBvHYftq5ZSv8D0r8vJZaWtNtD5neQmiNT2IA91MYi4rTo8epZfW7IKUKmzN1cyMIp3YpsPalYcStAPZFC0b0MU+GEBftiN1LuPzW6SRsd/XJkEcmv1eZLnezf8CVmsmZ5ltxyCelnbjgaI0+Izx+g/8ttIFvtSRioSYpHZ7XE+o01+syaRSQLz4c9BEDy2LDsREmPMGhbgtNTPOkCW3Kb2Mb6m1VzBgiHGMfXbxhbcejoECUCEual9u20V3uqPlxCrEgXZXhKBdPAfSgfQCOF7eMaw8rDenHYwaL36Oqoc3uCkM1LZvokHnK4qAyGEkhc5JDN2jkiz+GRuiErkq3dKnjyccLfNZ7AssifLs2SRB2QtDZI1j1tIFrAVn+426ZhxdmYHinBLdFEtO2BvUTeRv6Qe1UCjXd9wODL8eP0dWQ8sS29ewQ/5VdZGsuCesjkWrSALXKTFbls0/ivi8YAkvOQEEun6fsOcp8P0Zm32jvYEWWyD04O8kz3PzfzdoBB3bJVTkfUk3xWpfFCYNPSGW5Fww8thU/R9NC7Pz5crkeDW1p+ThbK0tWR5xQKHhYg0gZhvYu1NaWNbEqz6c24CHmHxKi1wbLKYHm2B2CRAUeo9RZa/KZGsts4ta5avRdfuFCCJ7S7b+8RhSN1UnzoEQlciOstMF+nlNkkkl1JJJIs+QZZnA7yax63TWRZMU2k3mWDzr0z4tpeF/m7Ir4Y8MO0NFFpSebQZryGRlFx8uCY/tSxILhF3bZ3/0yMSAQs41Q1qAZyu8ykHpjTqeQauR4clwc6zATUhOfk8rhY/IQtWhxmIUpCsh2FLySoOSAB+9fra8AQ3Sggi5+cx1Z727fyfl4+upElIlPAu2R5/jCur4H90Qyw90y0Hsswmfu67+nvgx8dEgCQ//X3SkRwFKs5MDmmOP0TNRZtZdc0DKQ0xR9Ow0TtR+qNl+ZA23kgpiOrULd19SLMFEUKSU6/ID7awLuKW+4C/A42KxzZQWueTASSAJkhWy0rrewX/mCwsYMGKkA+A1YAch+1cDEGUIlmE/ALa4P/oooRoriLcPHD7aXZGp8VstCLKgMm9O8UxXG2rDt+TVeOJBcyrDnAwl8svupXtsL0bigAsy6N1U51/AHfrigBn+q5PqpAOIZvmRprjcAbZEGt8+oRl1Zar+OStkKrL55lu5WyIZ1f7SBhyV1uRXmeTtSJSdHHH0/auNyBRFPEAQr7tdwEpNHxEFjxZvUrBlBjDfRoy6JoR81rYsrAIlyTqSvKhsn137dXx3SuiXnXBtsCikgRURWdZ9emu50X7LFuI6Fu6w0HRlilI/rNqLiNgSw1bmusgtFfybpBsc0tWo1k/9F8b1VUJ7rk0pfj1Ztb0d9uXgKy67pVS7snyLVmqrL2mmK7g4Sog65bGKwtWrXlEuPij2HUPcQGEqC45JMyQRpu7L6FX08a3ZlWEF7cgMIJdiUZby4ogZoWzN+skIiqSZtnW9r1nT545grgjyNyu9xCVtNYsTCG5SUAwzE8yPGoGq8R9z59trowyRigyxL32O7IgZv0+fW94GWBJuZe1U7tbQFrzBs8eEOWG+XbjEtZnfF1/vBtsIX+Gb/dz8GEIykJwLiNYK3u7gYa8A3lSEM1BoPEE7EoeZ6yVZb8dGKXVLegqTq5nDMcfd1viKO6nOI/7jW8bGXBBxzanhpgPQmM1xc0plGUDIEsAgwGsmiYwwJXf4r07YE3hAUlAtJvD8IdxUDyvADywaXT2xy0ENhEkoFDN+zjELqOn05LbYzEg5KtuUoLsP2vzTlYgC9Y0kZhIlX+G31ayfS+L2qaGzkdHQAm4mSmVPNpYmQFkNcvdrmogC5Tr1SiktN/O6vs9/GlxIYMIxOVgE9/3vexxIZDt4WZpeuYdG/5OChVFincuMryGCtUv7pTEhj3uHRjcxN5u6K29boho0jmxxdL1JkNLw8PpbJsHCGmaMO0NDGZEhESJOc2+zaqxuIPN/iQhYtBLW1qW+Q6aNf0BcsX59tCeY3F/kh/286vJSiYoFyAuvR3WxQPDCUcBB8VgVscnFZ6Q+xLge7pelglujlPmw8jORfq741PqanNkgiBIIqV4ebt5cJIR0Dmbi4TL5DorWL997fqfI74oky4ekcLNfHJWZWkdx7Msu5hvjcKDoKLADA6z2jrp7hlaF2/AOyFPPCzuD/l5IdDhpMQbx1OMhLkaXp6e/ra42ppEgVxXQpLtwSxEW9uRRfHQzXSNJ9CQTlg/OuXhBYBVy7WCYA1cqa+HiSklukQEAS8XX8L7o84RYEo6X8gEj84Yx2yfZb8Y0CbsH4HcUsn+oDrxlTJBrka5fnQENQXxPjQyUDLpZK2tXv0ckN9Ukw74odob1f7YSKHMpCooow9tpwmrBVG4zdeMwrZuQPkXwIGjMB+vAnv8oe2JYX4NXijnXlF8PRnLngiSbW5Bx+KGnbvwBRqWtxv9OMtGd1dvv54BzxMFeoIPDqoYspu+1RNMZ/VdiXNKJiCL7IXoq8fYL3PMT/NwdHjw22+nk9F0hRFcgigdHI+yLATMqvTN8C2EdiJkJFZ5m+uifwWKeTMWjy3o9EgEIpICtyWuPwwPbg6G8wFRnEuFm1ePUv0S7eobcD6raRqtdRhqGkMc79ozN8X+3DbFgT8RmW5iLrOXzZU91c4DspjNoRnLD9eSB9Ieo6UiC4z9YG3rSe61tE3/b8K3U6X0HuCW1ZdhqYz9qwP2TzMolagoIeViGvptPirrP4Ju8vNhiS18hX/2w+B5UHxwpzPNWl65+k/gM0iqJ68HpbFBC//2wKSOwVVfoL76KzTY3mkKWBpHk8PDw8kJy2NG/ReVC/7bYBYQv4owLFhRUNrvY4PacfUEkCq9O8ZO29q797VK89wv7R+Jeyuiuy7G/lhJR5aDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODwz8D/w/deEsPvmhpzAAAAABJRU5ErkJggg==",
    link: "https://chat.openai.com/chat"
  },
  {
    title: "까만 고양이 네로",
    image: "https://cdn.pixabay.com/photo/2023/03/21/08/36/cat-7866716_640.jpg",
    link: "https://chochojj.notion.site/TIL-512e6f89bf1f41228a69b97a1336b37e"
  },
  {
    title: "날아간다 슈웅",
    image: "https://cdn.pixabay.com/photo/2023/03/10/20/36/kitesurfing-7843135__340.jpg",
    link: "https://example.com/3"
  },
  {
      title: "삼시세끼 빵만 먹어도 좋아",
      image: "https://cdn.pixabay.com/photo/2016/03/27/21/59/bread-1284438__340.jpg",
      link: "https://example.com/4"
  },
  {
      title: "여행 가자요",
      image: "https://cdn.pixabay.com/photo/2018/06/27/17/48/fantasy-3502188__340.jpg",
      link: "https://example.com/5"
    },
    {
      title: "토 끼 조 와",
      image: "https://media.istockphoto.com/id/1370481100/ko/%EC%82%AC%EC%A7%84/%ED%86%A0%EB%81%BC.jpg?b=1&s=170667a&w=0&k=20&c=lYSuH7ctBFgceBrJKgp4DPoU_qYckX_c7Rozx7OwhUY=",
      link: "https://example.com/6"
  },
  {
      title: "지글지글 고기 굽는 소리",
      image: "https://cdn.pixabay.com/photo/2015/10/30/14/03/pork-1014180__340.jpg",
      link: "https://example.com/7"
    },
    {
      title: "난 월요일이 너~무 좋아",
      image: "https://cdn.pixabay.com/photo/2018/12/14/18/58/spongebob-3875602__340.jpg",
      link: "https://example.com/8"
    },
    {
      title: "침대에서 영원히 안 일어나기",
      image: "https://cdn.pixabay.com/photo/2022/04/14/13/36/bedroom-7132435__340.jpg",
      link: "https://example.com/9"
    },
    {
      title: "요즘 갖고싶은 것, 마샬 스피커",
      image: "https://cdn.pixabay.com/photo/2020/05/01/06/18/speaker-5115559__340.jpg",
      link: "https://example.com/10"
    },
    {
      title: "요즘 영화 뭐 재미있나",
      image: "https://cdn.pixabay.com/photo/2016/06/03/12/42/popcorn-1433327__340.jpg",
      link: "https://example.com/11"
    },
    {
      title: "바나나 바나나나",
      image: "https://cdn.pixabay.com/photo/2014/10/31/17/41/dancing-dave-minion-510835__340.jpg",
      link: "https://example.com/12"
    },
    {
      title: "손재주 없으면 절대 못하는 것",
      image: "https://cdn.pixabay.com/photo/2022/06/02/18/20/knitting-7238657__340.jpg",
      link: "https://example.com/13"
    },
    {
      title: "뭐 안했는데 벌써 여름 🏄‍♀️",
      image: "https://cdn.pixabay.com/photo/2016/11/29/05/26/beach-1867524__340.jpg",
      link: "https://example.com/14"
    },
    {
      title: "파인애플 피자...좋아하세요?",
      image: "https://media.istockphoto.com/id/185265259/ko/%EC%82%AC%EC%A7%84/%ED%95%98%EC%99%80%EC%9D%B4%EC%96%B4-%ED%94%BC%EC%9E%90-%ED%81%B4%EB%A1%9C%EC%A6%88%EC%97%85.jpg?b=1&s=170667a&w=0&k=20&c=DBkKxbKU1-LmboGrgyA4enS_aBK0Hd0-tmLYMwfrNsw=",
      link: "https://example.com/"
    },
    {
      title: "비나이다 비나이다 코드신이시여",
      image: "https://cdn.pixabay.com/photo/2020/10/07/05/53/hands-5634107__340.jpg",
      link: "https://example.com/13"
    },
    {
      title: "맥주 한잔만 주쇼",
      image: "https://cdn.pixabay.com/photo/2022/12/03/06/31/simpsons-7632168__340.jpg",
      link: "https://example.com/14"
    },
    {
      title: "등킨 도나쓰 무러 부산오이소",
      image: "https://media.istockphoto.com/id/1334988806/ko/%EC%82%AC%EC%A7%84/%EA%B0%88%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EB%8C%80%ED%95%9C-%EB%82%98%EB%AC%B4-%ED%85%8C%EC%9D%B4%EB%B8%94%EC%97%90-%EB%A7%9B%EC%9E%88%EB%8A%94-%EB%8F%84%EB%84%9B%EA%B3%BC-%EC%A2%85%EC%9D%B4-%EC%BB%B5.jpg?b=1&s=170667a&w=0&k=20&c=HIIvXq8iSPhPMHC888tTrxsVVgHwELokexLVfv65ueY=",
      link: "https://example.com/"
    }
];

export default contentData;
