# git clone https://github.com/oracle/oci-designer-toolkit
git clone https://github.com/sofianemad/oci-designer-toolkit/
cd oci-designer-toolkit/visualiser
git checkout nightly
export OKIT_DIR=~/okit
file="$OKIT_DIR/log/okit.log"
mkdir -p $(dirname $file) && touch "$file"
#pip install python-magic --user
export OCI_CLI_AUTH=instance_principal
export OKIT_VM_COMPARTMENT='oci-metadata -g "compartmentID" --value-only'
tenancy_id=$(curl -L -s 'http://192.0.2.40/opc/v1/instance/' | jq -r '.freeformTags."user-tenancy-ocid"')