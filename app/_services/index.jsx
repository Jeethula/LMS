
import { request, gql } from 'graphql-request'

// const MASTER_URL ="https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master"
const MASTER_URL ="https://api-ap-south-1.hygraph.com/v2/clrhm723p1co301w9pgv4mb50/master"

 export const getCourseList= async ()=>{
    const query=gql`
    query CourseList {
        courseLists {
          description
          id
          name
          banner {
            url
          }
          free
          totalChapters
          tag
        }
      }
      
    `;
    try {
        const result = await request(MASTER_URL, query);
        return result;
      } catch (error) {
        console.error('Error fetching course list:', error);
        throw error; 
      } finally {
        console.log('Request completed'); 
      }

}

export const getCourseById = async (id,userEmail)=>{
    const query = gql`
    query course {
        courseList(where: {id: "`+id+`"}) {
          id
          name
          chapter {
            ... on Chapter {
              id
              name
              videoId
              youtubeUrl
              video {
                url
              }
            }
          }
          free
          description
          tag
          publishedAt
          totalChapters
        }
        userEnrollCourses(where: {courseId: "`+id+`", userEmail: "`+userEmail+`"}) {
            courseId
            userEmail
            completedChapeter
        }
      }
      `;

      const result = await request(MASTER_URL, query)
      return result
}

export const EnrollCourse = async (courseId,userEmail)=>{
    const mutationQuery = gql`
    mutation EnrollCourse {
        createUserEnrollCourse(data: {userEmail: "`+userEmail+`", courseId: "`+courseId+`"}) {
          id
        }
      }
    `;
    const result = await request(MASTER_URL, mutationQuery)
    return result
}

export const publishCourse = async (id)=>{
    const mutationQuery=gql`
    mutation EnrollCourse {
        publishUserEnrollCourse(where: {id: "`+id+`"}){
            id
        }
      }
    `;

    const result = await request(MASTER_URL, mutationQuery)
    return result
}