# README

![Build Status](https://codeship.com/projects/fd43f5e0-77bb-0134-c83e-5251019101b9/status?branch=master)
![Code Climate](https://codeclimate.com/github/michaelgt04/debate-react.png)
![Coverage Status](https://coveralls.io/repos/michaelgt04/debate-react/badge.png)

## Purpose
As a teacher, I really enjoyed having students debate each other. It really engaged them and
taught them so many important skills that needed to succeed in English class. More than that, they
just had fun.

However, especially later on in the year, I always wanted to get new perspectives into the classroom
to challenge how my students thought about their debate topics. I always wished I could get other students
from the sixth grade to come into my classroom and debate my students. Getting 50 sixth graders into
the same room usually wouldn't end so well though.

This app aims to allow for this kind of cross classroom debate while each teacher stays in his or her own classroom. Features I'd eventually like to build out include the ability to have analytics for
teachers to be able to quantify the success of their debates. Important to the interface
will also be teacher approval for student's postings to ensure quality (and since sometimes middle
school students decide to not be so nice to each other, shocking, I know).

## Technologies
This application will use the following technologies:

- React
 
  This app will be a single page application that makes use of Router for easy navigation between the various sections of the app. With a separate teacher and student interface, this will be especially  necessary for a good navigation experience.

- Redux

  In order to make the app more easily scale as more complex data starts to be added, Redux has been used. Learning this was a definite challenge, but has definitely deepened my understanding of React.

- ActionCable

  Using the new ActionCable will allow for instant message posting and receiving. Given the quick pace of debate, it is vital that these student messages post as quickly as possible and the use of web sockets will do that without necessitating manual page reloads for my users. Given that Rails 5 comes prepackaged with ActionCable, this will be my choice for providing those web sockets.

- Mobile Responsive

  Given the vastly differing ways in which schools have their technology set up, especially with the focus given to iPads, this site will need to look good on varying screen sizes. The interface will be designed to be able to make interacting with it easy on any screen. 
