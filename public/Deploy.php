<pre>
<?php
echo shell_exec('
    cd ../
    echo -e "echo -e \$PWD"
    echo    "============="
    echo -e $PWD"\n"
    echo
    
    echo "git log -1"
    echo "=========="
    git log -1 
    echo

    echo "git checkout stable"
    echo "==================="
    git checkout stable
    echo

    echo "git pull"
    echo "========"
    git pull
    echo

    echo "git log -1"
    echo "=========="
    git log -1
');
?>
</pre>
