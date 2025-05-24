import CommentList from "./CommentList";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsContainer = () => {
  return <CommentList info={commentsData} />;
};

export default CommentsContainer;
