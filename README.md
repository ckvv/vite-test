### Describe the bug
Both local `dev` and `build` can be accessed normally, and the problem occurs after the release

There is an exception code comment in the component
![截屏2022-07-14 18 41 38](https://user-images.githubusercontent.com/30174970/178965429-752d7969-a37f-42e0-8e69-973a989daa0d.png)


### Reproduction

https://github.com/ckvv/vite-test

### System Info

```shell
System:
    OS: Linux 4.14 Amazon Linux AMI 2018.03
    CPU: (2) x64 Intel(R) Xeon(R) Platinum 8275CL CPU @ 3.00GHz
    Memory: 537.37 MB / 3.65 GB
    Shell: 4.2.46 - /bin/bash
  Binaries:
    Node: 16.13.0 - ~/.nvm/versions/node/v16.13.0/bin/node
    Yarn: 1.22.5 - /usr/bin/yarn
    npm: 8.1.0 - ~/.nvm/versions/node/v16.13.0/bin/npm
  npmPackages:
    @vitejs/plugin-vue2: 1.1.2 => 1.1.2
    vite: 2.9.14 => 2.9.14
```


### Used Package Manager

yarn
