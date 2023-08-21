const baseUrl = 'https://basic-blog.teamrabbil.com/api';

const getPostsCategories = async () => {
    const res = await fetch(`${baseUrl}/post-categories`);
    if (res.status === 200) {
        return res.json();
    }
    else {
        return "There is an error in post categories data fatching";
    }
}

const getPostsList = async (id) => {
    const res = await fetch(`${baseUrl}/post-list/${id}`);
    if (res.status === 200) {
        return res.json();
    }
    else {
        return "There is an error in post-list data fatching";
    }
}

const getNewestPosts = async () => {
    const res = await fetch(`${baseUrl}/post-newest`);
    if (res.status === 200) {
        return res.json();
    }
    else {
        return "There is an error in recent post data fatching";
    }
}

const getPostsDetails = async (id) => {
    const res = await fetch(`${baseUrl}/post-details/${id}`);
    if (res.status === 200) {
        return res.json();
    }
    else {
        return "There is an error in post details data fatching";
    }
}

export { getPostsCategories, getPostsList, getNewestPosts, getPostsDetails};