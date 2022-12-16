case ${os_version} in
"")
  os_version=${expected_os_version[$i]}
  ;;
"${expected_os_version[0]}")
  if [[ $i -eq 0 ]]; then
    sm_pass
  else
    ERR::different_version
    break 2
  fi
  ;;
"${expected_os_version[1]}")
  if [[ $i -eq 1 ]]; then
    sm_pass
  else
    ERR::different_version
    break 2
  fi
  ;;
"${expected_os_version[2]}")
  if [[ $i -eq 2 ]]; then
    sm_pass
  else
    ERR::different_version
    break 2
  fi
  ;;
"${expected_os_version[3]}")
  if [[ $i -eq 2 ]]; then
    sm_pass
  else
    ERR::different_version
    break 2
  fi
;;
*)
  ERR::mismatch
  break 2
  ;;
esac
