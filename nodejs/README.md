# Build and Run 

Perhaps you might want a

    npm update

to get all (security) fiexes, then do:

    docker build -t  mh/perf-tst-node . 
    docker run -d --name perf-tst-node -p 8090:8090 mh/perf-tst-node